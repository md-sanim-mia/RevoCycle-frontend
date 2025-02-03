import { useGetSingleBicycleQuery } from "@/redux/features/bicycle/bicycle.api";
import {
  currentValue,
  decreaseProduct,
  increaseProduct,
  setTotalProduct,
} from "@/redux/features/bicycle/bicycle.slice";
import {
  currentPaymentData,
  setProducts,
} from "@/redux/features/payment/payment.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate, useParams } from "react-router-dom";
const ProductDeatils = () => {
  const { productId } = useParams();
  console.log(productId);
  const { data, isLoading } = useGetSingleBicycleQuery(productId);
  const product = data?.data;
  const navigation = useNavigate();
  const totalCount = useAppSelector(currentValue);
  const dispatch = useAppDispatch();
  console.log(product);
  dispatch(setTotalProduct(product?.quantity));
  const handileClickincrease = () => {
    dispatch(increaseProduct(totalCount));
  };
  const handileClickdecrease = () => {
    dispatch(decreaseProduct(totalCount));
  };

  const handileClickPaymentsDeatils = () => {
    dispatch(
      setProducts({
        product: product,
        price: product.price * totalCount,
        quantity: totalCount,
      })
    );
    navigation("/payments");
  };

  return (
    <>
      {isLoading ? (
        <p>is Loding.....</p>
      ) : (
        <div className="max-w-screen-xl h-full lg:px-10 mx-auto p-6 grid grid-cols-1  lg:grid-cols-2 gap-6">
          {/* Image Carousel */}
          <div>
            <Carousel showArrows={true} infiniteLoop={true} showThumbs={true}>
              {data?.data?.productImage?.map((img: string, index: number) => (
                <div key={index}>
                  <img
                    src={img}
                    alt="Bicycle"
                    className="w-full object-cover "
                  />
                </div>
              ))}
            </Carousel>
          </div>

          {/* Details Section */}
          <div className="lg:px-6 h-full">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {product?.name}
            </h1>

            <p className="text-gray-600 mt-4">{product?.description}</p>
            <p className="text-3xl font-bold text-red-500 mt-4">
              ${product?.price}
            </p>
            <div className="mt-4 grid gap-4 items-end">
              <div className="flex justify-between items-center gap-8">
                <p className="font-semibold text-lg">Brand:</p>
                <p className="text-lg">{product?.brand}</p>
              </div>
              <div className="flex justify-between items-center gap-8">
                <p className="font-semibold text-lg">Model:</p>
                <p className="text-lg">{product?.model}</p>
              </div>
              <div className="flex justify-between items-center gap-8">
                <p className="font-semibold text-lg">Stock:</p>
                <p className="text-lg">{product?.quantity}</p>
              </div>

              <div className=" flex items-center justify-between">
                <label
                  htmlFor="quantity"
                  className="font-semibold text-lg text-gray-700"
                >
                  Totall Price : ${product?.price * totalCount}
                </label>
                <div className="flex items-center">
                  <button
                    onClick={handileClickdecrease}
                    className="px-4 py-2 bg-gray-300 text-lg text-gray-700 rounded-l-md hover:bg-gray-400"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    value={totalCount}
                    className="w-16 text-center p-2 border-t border-b border-gray-300 text-lg"
                    readOnly
                  />
                  <button
                    onClick={handileClickincrease}
                    className="px-4 py-2 bg-gray-300 text-lg text-gray-700 rounded-r-md hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className=" lg:flex md:flex gap-4 mt-5 mb-4">
              <button className="w-full py-2 px-4 lg:mb-0  md:mb-0 mb-4 bg-black text-white font-semibold rounded-md hover:bg-red-500">
                Add to Cart
              </button>
              <button
                onClick={handileClickPaymentsDeatils}
                className="w-full py-2 px-4 bg-red-400 text-white font-semibold rounded-md hover:bg-black"
              >
                Buy Now
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p>Free shipping on orders over $500.</p>
              <p className="mt-2">30-day returns for full refunds.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDeatils;
