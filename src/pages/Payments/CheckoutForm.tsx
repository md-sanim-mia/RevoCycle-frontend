import Loding from "@/components/Loding/Loding";
import { useCurrenUser } from "@/redux/features/Auth/auth.slice";
import {
  useCreateOrdersMutation,
  useCreatePaymentIntentMutation,
} from "@/redux/features/payment/payment.api";
import { clearProduct } from "@/redux/features/payment/payment.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CheckoutForm = ({
  price,
  quantity,
  products,
}: {
  price: number;
  quantity: number;
  products: any;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState();
  const [cartError, setCartError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [isLoading, setIsLoding] = useState(false);
  const [isPaymentIntent] = useCreatePaymentIntentMutation();
  const navigation = useNavigate();
  const user = useAppSelector(useCurrenUser);
  const [isOrders] = useCreateOrdersMutation();
  const dispatch = useAppDispatch();
  console.log(user);
  useEffect(() => {
    setIsLoding(true);
    const fetchPaymentIntent = async () => {
      if (price > 0) {
        try {
          const res = await isPaymentIntent({ price }).unwrap();
          setClientSecret(res?.data?.client_secret);
          setIsLoding(false);
        } catch (error) {
          setIsLoding(false);
          console.error("Payment Intent Error:", error);
        }
      }
    };

    fetchPaymentIntent();
  }, [price, isPaymentIntent]);
  if (!clientSecret) {
    return;
  }
  const handleSubmit: SubmitHandler<FieldValues> = async (event) => {
    event.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      return;
    }

    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error as any) {
      console.log("[error]", error);
      setProcessing(false);
      setCartError(error!.message as any);
      return;
    } else {
      setCartError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    //confram payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCartError(confirmError.message as any);
      setProcessing(false);
      return;
    } else {
      if (paymentIntent.status === "succeeded") {
        const productData = {
          email: user?.email,
          quantity: quantity,
          totalPrice: price,
          productId: products?._id,
          product: products,
          transactionId: paymentIntent?.id,
        };

        const res = await isOrders(productData);
        console.log(res);
        dispatch(clearProduct());
        toast.success("success fully payment done ");
        setProcessing(false);
        navigation("/dashboard/view-order");
      }
    }
  };
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-green-100 max-w-md mx-auto">
      {isLoading && <Loding />}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* CardElement Section */}
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>

        {/* Pay Button */}
        <button
          className="w-full bg-gradient-to-r from-red-300 to-red-400 text-white py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          {processing ? "Processing..." : `Pay $${price || 0}`}
        </button>

        {/* Error Message */}
        {cartError && (
          <p className="text-red-500 font-semibold text-center">{cartError}</p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
