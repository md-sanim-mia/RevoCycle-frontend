import Loding from "@/components/Loding/Loding";
import { useChengePasswordMutation } from "@/redux/features/Auth/auth.api";
import { useCurrenUser } from "@/redux/features/Auth/auth.slice";
import { useAppSelector } from "@/redux/hook";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const Profile = () => {
  const user = useAppSelector(useCurrenUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isChengePassword, { isLoading }] = useChengePasswordMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await isChengePassword(data);
    console.log(res);
    toast.success("password succes fully chenge");
  };
  console.log(errors);

  return (
    <div>
      {isLoading && <Loding />}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full"
        >
          {/* Profile Image Upload */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
              <label
                htmlFor="profile-image"
                className="cursor-pointer w-full h-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </label>
              <input
                id="profile-image"
                type="file"
                accept="image/*"
                className="hidden"
              />
            </div>
            <span className="mt-2 text-sm text-gray-500">
              Click to upload photo
            </span>
          </div>
          <p
            className="mb-4
           text-center"
          >
            {user?.email}
          </p>

          {/* New Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Old Password
            </label>
            <input
              type="password"
              required
              {...register("oldPassword")}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter new password"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              New Password
            </label>
            <input
              type="password"
              required
              {...register("newPassword")}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Confirm new password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-400 text-white py-2 px-4 rounded-lg hover:bg-red-500 transition-colors font-semibold"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
