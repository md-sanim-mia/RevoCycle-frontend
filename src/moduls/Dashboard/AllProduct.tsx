import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BiEdit } from "react-icons/bi";
import {
  useDeleteProductMutation,
  useGetAllCategoryBicycleQuery,
} from "@/redux/features/bicycle/bicycle.api";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Loding from "@/components/Loding/Loding";
export type TProduct = {
  image: string;
  productImage: string[];
  name: string;
  brand: string;
  model: string;
  price: number;
  quantity: number;
  category: string;
  description: string;
  inStock?: boolean;
  _id: string;
};
const AllProduct = () => {
  const { data, isFetching } = useGetAllCategoryBicycleQuery(undefined);
  const [isDeleted] = useDeleteProductMutation();
  const handileClickDeleted = async (id: string) => {
    await isDeleted(id);
    toast.success("product has been deleted");
  };
  return (
    <div>
      {isFetching && <Loding />}
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className=""> Product Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Product update</TableHead>
            <TableHead className="text-right">Delete Proudct</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((item: TProduct, index: number) => (
            <TableRow>
              <TableCell className="font-medium flex gap-3">
                <p> {index + 1}</p> {item.name}
              </TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell
                className={
                  item.inStock
                    ? "inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800"
                    : "inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-pink-500 bg-pink-100 dark:bg-gray-800"
                }
              >
                {item.inStock ? "Available" : "Out of Stock"}
              </TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>
                <Link to={`/dashboard/update-Product/${item._id}`}>
                  {" "}
                  <BiEdit className="text-2xl cursor-pointer  rounded-full text-red-500 hover:bg-red-500 hover:text-white" />
                </Link>
              </TableCell>
              <TableCell className="text-right grid justify-around">
                <AiOutlineDelete
                  onClick={() => handileClickDeleted(item._id)}
                  className="text-2xl cursor-pointer  rounded-full text-red-500 hover:bg-red-500 hover:text-white"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllProduct;
