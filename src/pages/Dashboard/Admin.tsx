import { useGetallSellesQuery } from "@/redux/features/payment/payment.api";
import { BarChart } from "lucide-react";

const Admin = () => {
  const { data } = useGetallSellesQuery(undefined);
  return (
    <div>
      <div className={`min-h-screen bg-gray-100 p-8`}>
        {/* হেডার */}
        <header className={`bg-white shadow-lg rounded-lg p-6 mb-8`}>
          <h1 className={`text-3xl font-bold text-gray-800`}>
            Admin Dashboard
          </h1>
          <p className={`text-gray-600`}>Welcome back, Admin!</p>
        </header>

        {/* কার্ড গ্রিড */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6`}>
          {/* টোটাল সেলস রেভেনিউ কার্ড */}
          <div className={`bg-white shadow-lg rounded-lg p-6`}>
            <h2 className={`text-xl font-semibold text-gray-700`}>
              Total Sales Revenue
            </h2>
            <p className={`text-2xl font-bold text-blue-600 mt-2`}>
              ${data?.data?.totalRevenue || 0}
            </p>
            <p className={`text-gray-500`}>Last 30 days</p>
          </div>

          {/* ইউনিট সোল্ড কার্ড */}
          <div className={`bg-white shadow-lg rounded-lg p-6`}>
            <h2 className={`text-xl font-semibold text-gray-700`}>
              Units Sold
            </h2>
            <p className={`text-2xl font-bold text-green-600 mt-2`}>
              {data?.data?.totallSell}
            </p>
            <p className={`text-gray-500`}>Last 30 days</p>
          </div>

          {/* টপ-সেলিং বাইসাইকেল কার্ড */}
          <div className={`bg-white shadow-lg rounded-lg p-6`}>
            <h2 className={`text-xl font-semibold text-gray-700`}>
              Top-Selling Bicycles
            </h2>
            <ul className={`mt-4 space-y-2`}>
              {data?.data?.topSellingModels?.map((items: any) => (
                <li className={`text-gray-700`}>
                  {items?._id} - {items?.totalUnitsSold} units
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* গ্রাফ বা টেবিল সেকশন (ভবিষ্যতে যোগ করতে পারেন) */}
        <div className={`mt-8 bg-white shadow-lg rounded-lg p-6`}>
          <h2 className={`text-xl font-semibold text-gray-700`}>
            Sales Overview
          </h2>
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Admin;
