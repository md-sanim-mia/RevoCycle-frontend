import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useAppSelector } from "@/redux/hook";
import { currentPaymentData } from "@/redux/features/payment/payment.slice";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
console.log("this is api key", import.meta.env.VITE_STRIPE_PUBLIC_KEY);
console.log("this is loadStripe", stripePromise);
const Payment = () => {
  const data = useAppSelector(currentPaymentData);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col items-center justify-center py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold ">Stripe Payment Gateway</h1>
        <p className="text-gray-600 mt-2">
          Secure and seamless payments for your convenience.
        </p>
      </header>

      {/* Checkout Card */}
      <div className="bg-white shadow-2xl rounded-lg md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto px-8 py-12 transform transition-all hover:scale-105 hover:shadow-3xl">
        {/* Checkout Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-red-400 mb-2">
            Complete Your Purchase
          </h2>
          <p className="text-gray-500">
            Please enter your payment details below.
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h2>Totall Amount</h2>
            <h2 className="font-bold text-red-500">${data?.price || 0}</h2>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <h2>Totall Quantity </h2>
            <p className="font-bold text-red-500">{data?.quantity || 0}</p>
          </div>
        </div>
        {/* Checkout Form */}
        <div className="mt-6">
          <Elements stripe={stripePromise}>
            <CheckoutForm
              price={data?.price!}
              quantity={data?.quantity!}
              products={data?.product}
            />
          </Elements>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-500">
        <p>© 2023 Stripe Payment Gateway. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Payment;
