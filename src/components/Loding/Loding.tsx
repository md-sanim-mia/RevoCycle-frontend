import { FourSquare } from "react-loading-indicators";
const Loding = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-black/15 backdrop-blur-lg space-y-8 z-[40]">
      <FourSquare
        color="#FFFFFF"
        size="medium"
        style={{
          animation: "spin 1.5s ease-in-out infinite",
          display: "block",
          marginBottom: "30px",
          opacity: 0.9,
          filter: "drop-shadow(0 6px 10px rgba(0, 0, 0, 0.2))",
        }}
      />
      <p className="text-white text-3xl font-extrabold tracking-wide leading-tight animate-pulse">
        Preparing, please wait...
      </p>
    </div>
  );
};

export default Loding;
