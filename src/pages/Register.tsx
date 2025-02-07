import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/Schema/loginSchema";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserApiMutation } from "@/redux/features/User/user.api";
import { verifyToken } from "@/utils/verifyToken";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/features/Auth/auth.slice";
import { toast } from "sonner";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });
  const [createUser] = useCreateUserApiMutation();
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await createUser(data).unwrap();
      const decodeUser = verifyToken(res.data.accessToken);
      dispatch(setUser({ user: decodeUser, token: res.data.accessToken }));
      toast.success("user success fully account created");
      navigation("/");
      console.log(res.data);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl">Sign Up Now</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.name.message)}
                </p>
              )}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.email.message)}
                </p>
              )}
            </div>
            <div>
              <Input
                type="password"
                placeholder="Your Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {String(errors.password.message)}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
          <p className="text-sm mt-5 text-center">
            Already have an account?
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here.
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
