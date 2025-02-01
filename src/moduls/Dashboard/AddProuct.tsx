import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBicycleApiMutation } from "@/redux/features/bicycle/bicycle.api";
import ImageGenetors from "@/utils/ImgeGenetor";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddProuct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isBicycles] = useCreateBicycleApiMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let productImage = [];
    const image1 = await ImageGenetors(data.image[0]);
    const image3 = await ImageGenetors(data.thumbnail2[0]);
    const image4 = await ImageGenetors(data.thumbnail3[0]);
    productImage.push(image1, image3, image4);

    const productData = {
      image: image1,
      productImage: productImage,
      name: data.name,
      brand: data.brand,
      model: data.model,
      price: Number(data.price),
      quantity: Number(data.quantity),
      category: data.category,
      description: data.description,
    };
    const res = await isBicycles(productData).unwrap();
    toast.success("success fully proudct add");
    reset();
    console.log(res);
  };
  return (
    <div>
      <Card className="max-w-screen-xl lg:w-[60%] mx-auto mt-10 p-6 shadow-lg rounded-2xl">
        <CardContent>
          <h2 className="text-xl font-semibold text-center mb-4">
            Add Product
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <label htmlFor="name">Name</label>
                <Input
                  required
                  id="name"
                  {...register("name")}
                  placeholder="Enter product name"
                />
              </div>
              <div>
                <label htmlFor="brand">Brand</label>
                <Input
                  required
                  id="brand"
                  {...register("brand")}
                  placeholder="Enter brand"
                />
              </div>
              <div>
                <label htmlFor="model">Model</label>
                <Input
                  required
                  id="model"
                  {...register("model")}
                  placeholder="Enter model"
                />
              </div>
              <div>
                <label htmlFor="price">Price</label>
                <Input
                  required
                  id="price"
                  type="number"
                  {...register("price")}
                  placeholder="Enter price"
                />
              </div>
              <div>
                <label htmlFor="price">Quantity</label>
                <Input
                  required
                  id="quantity"
                  type="number"
                  {...register("quantity")}
                  placeholder="Enter quantity"
                />
              </div>
              <div>
                <label htmlFor="category">Category</label>
                <Input
                  required
                  id="category"
                  {...register("category")}
                  placeholder="Enter category"
                />
              </div>
              <div>
                <label htmlFor="image">Main Image</label>
                <Input required id="image" type="file" {...register("image")} />
              </div>
              <div>
                <label htmlFor="thumbnail2">Thumbnail 1</label>
                <Input
                  required
                  id="thumbnail2"
                  type="file"
                  {...register("thumbnail2")}
                />
              </div>
            </div>
            <div>
              <label htmlFor="thumbnail3">Thumbnail 2</label>
              <Input
                required
                id="thumbnail3"
                type="file"
                {...register("thumbnail3")}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <Textarea required {...register("description")} />
            </div>
            <Button type="submit" className="w-full">
              Add Product
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddProuct;
