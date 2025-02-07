import Loding from "@/components/Loding/Loding";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useActivedUsersMutation,
  useDeActivedUsersMutation,
  useDeleteUsersMutation,
  useGetAllUsersQuery,
} from "@/redux/features/User/user.api";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "sonner";
export type TUsers = {
  name: string;
  email: string;
  isDeleted: boolean;
  role: string;
  _id: string;
  status: string;
};
const AllUser = () => {
  const { data, isFetching } = useGetAllUsersQuery(undefined);
  const [isdelete] = useDeleteUsersMutation();
  const [isActive] = useActivedUsersMutation();
  const [isDeActived] = useDeActivedUsersMutation();
  console.log(data);
  const handileClickDeleted = async (id: string) => {
    console.log(id);
    const res = await isdelete(id);
    toast.success("user success fully deleted");
    console.log(res);
  };
  const handileClickActive = async (id: string) => {
    console.log(id);
    const res = await isActive(id);
    toast.success("user success fully Active");
    console.log(res);
  };
  const handileClickDeActiv = async (id: string) => {
    console.log(id);
    const res = await isDeActived(id);
    toast.success("user success fully Block");
    console.log(res);
  };
  return (
    <div>
      {isFetching && <Loding />}
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Full Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>

            <TableHead>Actived account</TableHead>
            <TableHead>Deactivate</TableHead>

            <TableHead className="text-right">Delted</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((item: TUsers) => (
            <TableRow key={item?._id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell className="px-4 py-4 capitalize text-sm font-medium text-gray-700 whitespace-nowrap">
                <div
                  className={
                    item.status === "actived"
                      ? "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800"
                      : "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-pink-100 dark:bg-gray-800"
                  }
                >
                  <span
                    className={
                      item.status === "actived"
                        ? "h-1.5 w-1.5 rounded-full bg-emerald-500"
                        : "h-1.5 w-1.5 rounded-full bg-pink-500"
                    }
                  >
                    {" "}
                  </span>
                  <h2
                    className={
                      item.status === "actived"
                        ? "text-sm font-normal text-emerald-500"
                        : "text-sm font-normal text-pink-500"
                    }
                  >
                    {" "}
                    {item?.status}
                  </h2>
                </div>
              </TableCell>
              <TableCell>{item?.email}</TableCell>
              <TableCell>{item?.role}</TableCell>
              <TableCell>
                {item?.status === "actived" ? (
                  <button className="cursor-pointer px-3 py-1 text-xs text-indigo-300 bg-indigo-100 rounded-full dark:bg-gray-800 ">
                    Actived
                  </button>
                ) : (
                  <button
                    onClick={() => handileClickActive(item?._id)}
                    className="cursor-pointer px-3 py-1 text-xs text-white bg-[#66b2b2] rounded-full dark:bg-gray-800 "
                  >
                    Actived
                  </button>
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-x-2">
                  {item?.status === "deactivate" ? (
                    <button
                      className={
                        "cursor-pointer disabled px-3 py-1 text-xs text-indigo-300 bg-indigo-100 rounded-full dark:bg-gray-800 "
                      }
                    >
                      deactivate
                    </button>
                  ) : (
                    <button
                      onClick={() => handileClickDeActiv(item?._id)}
                      className={
                        "cursor-pointer px-2 py-2 text-xs text-white bg-[#E73879] rounded-full dark:bg-gray-800 "
                      }
                    >
                      deactivate
                    </button>
                  )}
                </div>
              </TableCell>
              <TableCell className=" cursor-pointer grid text-red-500 text-2xl justify-end ">
                <AiFillDelete
                  className=""
                  onClick={() => handileClickDeleted(item?._id)}
                />{" "}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllUser;
