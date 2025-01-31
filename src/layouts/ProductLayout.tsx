import { isShowSideber, setCardSideber } from "@/redux/features/sideberSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RxCross1 } from "react-icons/rx";
const ProductLayout = () => {
  const dispatch = useAppDispatch();
  const handileClickHiden = () => {
    dispatch(setCardSideber(false));
  };
  const isShows = useAppSelector(isShowSideber);
  return (
    <div className="">
      {/* Sidebar (Fixed to Right) */}
      <div
        className={
          isShows
            ? " lg:w-96 md:w-96 w-screen z-40 transition duration-300 transform ease-in-out  bg-white p-4 fixed right-0 top-0 h-full shadow-2xl"
            : " lg:w-96 md:w-96 w-screen z-40 transition duration-300 transform ease-in-out hidden bg-white p-4 fixed right-0 top-0 h-full shadow-2xl"
        }
      >
        <div className="flex justify-between items-center">
          <RxCross1
            className="cursor-pointer text-2xl"
            onClick={handileClickHiden}
          />
          <p> Sidebar Content</p>
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
