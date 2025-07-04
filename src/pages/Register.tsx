import { registerSchema } from "@/Schema/loginSchema";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserApiMutation } from "@/redux/features/User/user.api";
import { verifyToken } from "@/utils/verifyToken";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/features/Auth/auth.slice";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

import { useState } from "react";

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  ArrowRight,
  Bike,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";

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
    setIsLoading(true);
    const userData = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };

    try {
      const res = await createUser(userData).unwrap();
      const decodeUser = verifyToken(res.data.accessToken);
      dispatch(setUser({ user: decodeUser, token: res.data.accessToken }));
      toast.success("user success fully account created");
      navigation("/");
      console.log(res.data);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      console.log(error);
      toast.error(error?.data?.message);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    agreeToTerms: false,
  });

  return (
    <>
      <Helmet>
        <title>RevoCycle - Register Page </title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex">
        {/* Left Side - Hero Section */}
        <div className="hidden lg:flex items-center px-6 lg:w-1/2 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-8">
                <Bike className="h-12 w-12 text-red-500" />
                <h1 className="text-4xl font-bold text-red-500">RevoCycle</h1>
              </div>
              <h2 className="text-3xl font-bold leading-tight">
                Join Our Cycling Community Today
              </h2>
              <p className="text-xl text-red-100 max-w-md">
                Create your account and unlock exclusive deals, expert advice,
                and premium cycling experiences.
              </p>

              {/* Benefits */}
              <div className="space-y-4 mt-12">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-red-100">
                    Exclusive discounts up to 30%
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-red-100">
                    Free shipping on orders over $100
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-red-100">
                    Priority customer support
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-red-100">
                    Early access to new products
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
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
                <CardTitle className="text-xl">Get started today</CardTitle>
                <CardDescription>
                  Create your account to unlock exclusive benefits
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium text-gray-700"
                      >
                        First Name
                      </Label>
                      <div className="relative">
                        <Input
                          type="text"
                          {...register("firstName")}
                          className="pl-10 h-11 border-gray-200 focus:border-red-500 focus:ring-red-500"
                          placeholder="John"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">
                            {String(errors.firstName.message)}
                          </p>
                        )}
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </Label>
                      <div className="relative">
                        <Input
                          type="text"
                          {...register("lastName")}
                          className="pl-10 h-11 border-gray-200 focus:border-red-500 focus:ring-red-500"
                          placeholder="Doe"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">
                            {String(errors.lastName.message)}
                          </p>
                        )}
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      </div>
                    </div>
                  </div>

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
                        autoComplete="email"
                        {...register("email")}
                        className="pl-10 h-11 border-gray-200 focus:border-red-500 focus:ring-red-500"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {String(errors.email.message)}
                        </p>
                      )}
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Input
                        type="tel"
                        {...register("phone")}
                        className="pl-10 h-11 border-gray-200 focus:border-red-500 focus:ring-red-500"
                        placeholder="+1 (555) 123-4567"
                      />

                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {String(errors.phone.message)}
                        </p>
                      )}
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
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
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        {...register("password")}
                        className="pl-10 pr-12 h-11 border-gray-200 focus:border-red-500 focus:ring-red-500"
                        placeholder="Create a strong password"
                      />
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                          {String(errors.password.message)}
                        </p>
                      )}
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    {/* Password Strength Indicator */}
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            agreeToTerms: checked as boolean,
                          })
                        }
                      />
                      <Label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the{" "}
                        <Link
                          to="/terms"
                          className="text-red-600 hover:text-red-500 font-medium"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/privacy"
                          className="text-red-600 hover:text-red-500 font-medium"
                        >
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium transition-all duration-200 transform hover:scale-[1.02]"
                    disabled={!formData.agreeToTerms || isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Creating account...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span>Create Account</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-red-600 hover:text-red-500 transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
