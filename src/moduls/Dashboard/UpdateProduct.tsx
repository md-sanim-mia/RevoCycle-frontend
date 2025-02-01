import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  useCreateBicycleApiMutation,
  useGetSingleBicycleQuery,
} from "@/redux/features/bicycle/bicycle.api";
import ImageGenetors from "@/utils/ImgeGenetor";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const UpdateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const { productId } = useParams();
  const { data } = useGetSingleBicycleQuery(productId);
  const [isBicycles] = useCreateBicycleApiMutation();
  const product = data?.data;
  const navigation = useNavigate();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let productImage = [];
    let image = "";
    if (data?.image) {
      const image1 = await ImageGenetors(data.image[0]);
      image = image1;
      productImage.push(image1 || product.productImage[0]);
    }
    if (data?.thumbnail2) {
      const image3 = await ImageGenetors(data.thumbnail2[0]);
      productImage.push(image3 || product.productImage[1]);
    }
    if (data?.thumbnail2) {
      const image4 = await ImageGenetors(data.thumbnail3[0]);
      productImage.push(image4 || product.productImage[2]);
    }

    const productData = {
      image: image || product?.image,
      productImage: productImage,
      name: data.name || product?.name,
      brand: data.brand || product?.brand,
      model: data.model || product?.model,
      price: Number(data.price) || product?.price,
      quantity: Number(data.quantity) || product?.quantity,
      category: data.category || product?.category,
      description: data.description || product?.description,
    };
    const res = await isBicycles(productData).unwrap();
    toast.success("success fully proudct update");
    reset();
    navigation("/dashboard/all-product");
    console.log(res);
  };
  return (
    <div>
      <Card className="max-w-screen-xl lg:w-[60%] mx-auto mt-10 p-6 shadow-lg rounded-2xl">
        <CardContent>
          <h2 className="text-xl font-semibold text-center mb-4">
            Update Product
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <label htmlFor="name">Name</label>
                <Input
                  defaultValue={product?.name}
                  id="name"
                  {...register("name")}
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label htmlFor="brand">Brand</label>
                <Input
                  defaultValue={product?.brand}
                  id="brand"
                  {...register("brand")}
                  placeholder="Enter brand"
                />
              </div>
              <div>
                <label htmlFor="model">Model</label>
                <Input
                  defaultValue={product?.model}
                  id="model"
                  {...register("model")}
                  placeholder="Enter model"
                />
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <Input
                  defaultValue={product?.price}
                  id="price"
                  type="number"
                  {...register("price")}
                  placeholder="Enter price"
                />
              </div>
              <div>
                <label htmlFor="price">Quantity</label>
                <Input
                  defaultValue={product?.quantity}
                  id="quantity"
                  type="number"
                  {...register("quantity")}
                  placeholder="Enter quantity"
                />
              </div>
              <div>
                <label htmlFor="category">Category</label>
                <Input
                  defaultValue={product?.category}
                  id="category"
                  {...register("category")}
                  placeholder="Enter category"
                />
              </div>
              <div>
                <label htmlFor="image">Main Image</label>
                <Input
                  defaultValue={product?.image}
                  id="image"
                  type="file"
                  {...register("image")}
                />
              </div>
              <div>
                <label htmlFor="thumbnail2">Thumbnail 1</label>
                <Input
                  id="thumbnail2"
                  defaultValue={product?.thumbnail2}
                  type="file"
                  {...register("thumbnail2")}
                />
              </div>
            </div>
            <div>
              <label htmlFor="thumbnail3">Thumbnail 2</label>
              <Input
                id="thumbnail3"
                defaultValue={product?.thumbnail3}
                type="file"
                {...register("thumbnail3")}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <Textarea
                defaultValue={product?.description}
                {...register("description")}
              />
            </div>
            <Button type="submit" className="w-full">
              Update Now
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateProduct;
