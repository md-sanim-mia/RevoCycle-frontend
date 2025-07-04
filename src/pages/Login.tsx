import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/Schema/loginSchema";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/features/Auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/features/Auth/auth.slice";
import { verifyToken } from "@/utils/verifyToken";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Bike, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useState } from "react";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: zodResolver(loginSchema) });
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  console.log(setIsLoading);
  const navigation = useNavigate();
  const [loging] = useLoginMutation();
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      console.log(data);
      const res = await loging(data).unwrap();
      const decodeUser = verifyToken(res.data.accessToken);
      dispatch(setUser({ user: decodeUser, token: res.data.accessToken }));
      toast.success("user succes fully loging");
      navigation("/");
      console.log("Login Data:", res.error);
    } catch (error: any) {
      console.log(error.data.message);
      toast.error(error?.data?.message);
    }
  };
  const handleDemoLogin = () => {
    setValue("email", "admin@revocycle.com");
    setValue("password", "admin1234");
  };

  return (
    <>
      <Helmet>
        <title>RevoCycle - Login Page </title>
      </Helmet>
      {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="w-96 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-xl">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  type="email"
                  value={formData.email}
                  placeholder="Email"
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
                  placeholder="Password"
                  value={formData.password}
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {String(errors.password.message)}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            <p className="text-sm mt-5 text-center">
              Don't have an account?
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign up here
              </Link>
            </p>
          </CardContent>
        </Card>
      </div> */}

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex">
        {/* Left Side - Hero Section */}
        <div className="hidden lg:flex items-center px-6 lg:w-1/2 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-white ">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-8">
                <Bike className="h-12 w-12 text-red-500" />
                <h1 className="text-4xl font-bold">RevoCycle</h1>
              </div>
              <h2 className="text-3xl font-bold leading-tight">
                Welcome Back to Your Cycling Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-md">
                Discover premium bikes, expert advice, and join our community of
                cycling enthusiasts.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">500+</div>
                  <div className="text-sm text-gray-400">Premium Bikes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">10K+</div>
                  <div className="text-sm text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-red-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-7">
          <div className="w-full max-w-md space-y-8">
            {/* Mobile Header */}
            <div className="text-center lg:hidden">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Bike className="h-8 w-8 text-red-500" />
                <h1 className="text-2xl font-bold text-gray-900">RevoCycle</h1>
              </div>
            </div>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="space-y-1 pb-4">
                <CardTitle className="text-xl">Login to your account</CardTitle>
                <CardDescription>
                  Enter your credentials to access your dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Demo Credentials */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Demo Credentials
                  </h3>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDemoLogin}
                      className="w-full justify-between text-left h-auto p-3 hover:bg-blue-50 border-blue-200"
                    >
                      <div>
                        <div className="font-medium text-blue-900">
                          Admin Account
                        </div>
                        <div className="text-xs text-blue-600">
                          admin@revocycle.com
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-blue-500" />
                    </Button>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </Label>
                    <div className="relative">
                      <Input
                        type="email"
                        className="pl-10 h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
                        placeholder="Enter your email address"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {String(errors.email.message)}
                        </p>
                      )}

                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        className="pl-10 pr-12 h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
                        placeholder="Enter your password"
                        {...register("password")}
                      />
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                          {String(errors.password.message)}
                        </p>
                      )}
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) => setFormData({ ...formData, rememberMe: checked as boolean })}
                    />
                    <Label htmlFor="remember" className="text-sm text-gray-600">
                      Remember me
                    </Label>
                  </div> */}

                    <Link
                      to="/login"
                      className="text-sm font-medium text-red-600 hover:text-red-500 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium transition-all duration-200 transform hover:scale-[1.02]"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Signing in...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Sign In</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator className="w-full" />
                  </div>
                  {/* <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">
                      Or continue with
                    </span>
                  </div> */}
                </div>
                {/*
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="h-12 border-gray-200 hover:bg-gray-50 bg-transparent"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                  <Button
                    variant="outline"
                    className="h-12 border-gray-200 hover:bg-gray-50 bg-transparent"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Button>
                </div> */}
              </CardContent>
            </Card>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-red-600 hover:text-red-500 transition-colors"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
