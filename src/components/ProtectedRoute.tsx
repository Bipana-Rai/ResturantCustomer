import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { user } = useSelector((state: RootState) => state.item);
  console.log("----", user);
  if (user === undefined) {
    return null; // or a loading spinner
  }

  return user?.role==="customer" ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;
