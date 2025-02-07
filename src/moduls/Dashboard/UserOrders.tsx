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
import { useCurrenUser } from "@/redux/features/Auth/auth.slice";
import { useGetuserAllOrdersQuery } from "@/redux/features/payment/payment.api";
import { useAppSelector } from "@/redux/hook";
const UserOrders = () => {
  const user = useAppSelector(useCurrenUser);
  const { data, isFetching } = useGetuserAllOrdersQuery(user?.email);

  console.log(data?.data);
  return (
    <div>
      {isFetching && <Loding />}
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Product Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment Date</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Transaction Id</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((item: any) => (
            <TableRow>
              <TableCell className="font-medium">
                {item?.product?.name}
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
              <TableCell>{item?.transactionId}</TableCell>
              <TableCell className="text-right">${item?.totalPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserOrders;
