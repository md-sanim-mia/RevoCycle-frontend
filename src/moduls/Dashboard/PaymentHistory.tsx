import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { HiDotsVertical } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import {
  useDeleteOrderProductMutation,
  useGetAllOrdersQuery,
} from "@/redux/features/payment/payment.api";
import { toast } from "sonner";
const PaymentHistory = () => {
  const { data } = useGetAllOrdersQuery(undefined);
  const [isOrderDeleted] = useDeleteOrderProductMutation();
  const handileClickdeletedOrder = async (id: string) => {
    const res = await isOrderDeleted(id);
    toast.success("order succes fully deleted");
    console.log(res);
  };
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Product Name</TableHead>
            <TableHead>Customer Email</TableHead>
            <TableHead>Transaction Id</TableHead>
            <TableHead>Order Status</TableHead>
            <TableHead>Order Date</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((item: any, index: number) => (
            <TableRow>
              <TableCell className="font-medium flex items-center gap-3">
                <p> {index + 1}</p>
                <p> {item?.product?.name}</p>
              </TableCell>
              <TableCell>{item?.email}</TableCell>
              <TableCell className="text-red-500">
                {item?.transactionId}
              </TableCell>
              <TableCell className="px-4 py-4 capitalize text-sm font-medium text-gray-700 whitespace-nowrap">
                <div
                  className={
                    item?.status === "pending"
                      ? "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-yellow-100 dark:bg-gray-800"
                      : item?.status === "pid"
                      ? "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800"
                      : "inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-pink-100 dark:bg-gray-800"
                  }
                >
                  <span
                    className={
                      item?.status === "pending"
                        ? "h-1.5 w-1.5 rounded-full bg-yellow-500"
                        : item?.status === "approved"
                        ? "h-1.5 w-1.5 rounded-full bg-emerald-500"
                        : "h-1.5 w-1.5 rounded-full bg-pink-500"
                    }
                  ></span>

                  <h2
                    className={
                      item?.status === "pending"
                        ? "text-sm font-normal text-yellow-500"
                        : item?.status === "approved"
                        ? "text-sm font-normal text-emerald-500"
                        : "text-sm font-normal text-pink-500"
                    }
                  >
                    {item?.status}
                  </h2>
                </div>
              </TableCell>
              <TableCell>{item?.createdAt}</TableCell>
              <TableCell>{item?.quantity}</TableCell>
              <TableCell>${item?.totalPrice}</TableCell>
              <TableCell className="text-right flex gap-3 mt-3">
                <AiOutlineDelete
                  onClick={() => handileClickdeletedOrder(item?._id)}
                  className="text-xl hover:text-red-500 cursor-pointer"
                />
                <HiDotsVertical className="text-xl hover:text-red-500 cursor-pointer" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PaymentHistory;
