import { useCurrenToken } from "@/redux/features/Auth/auth.slice";
import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivtedRouted = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrenToken);
  const location = useLocation();
  console.log("this token for privted route", token);
  if (!token) {
    return <Navigate to={"/login"} state={location?.pathname}></Navigate>;
  }
  return <div>{children}</div>;
};

export default PrivtedRouted;
