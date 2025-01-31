import { setIsOpen } from "@/redux/features/sideberSlice";
import { useAppDispatch } from "@/redux/hook";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { FaListAlt } from "react-icons/fa";
const Heder = () => {
  const dispatch = useAppDispatch();
  const handileClickShows = () => {
    dispatch(setIsOpen("isShows"));
  };
  return (
    <div className="sticky h-16 top-0 z-30 text-white p-4 py-2 bg-[#000000] border-b">
      <div className="flex items-center justify-between gap-2 pr-6 space-x-6">
        {/* Notification Icon */}
        <div className="flex items-center gap-6">
          <FaListAlt
            onClick={handileClickShows}
            className="text-3xl cursor-pointer"
          />
          <h2>RevoCycle</h2>
        </div>
        <Avatar className="h-10 w-10 rounded-full">
          <AvatarImage
            className="rounded-full"
            src="https://github.com/shadcn.png"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Heder;
