import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const { user,loading } = useSelector((state: RootState) => state.item);
  console.log("----", user);
  if(loading){return <p>loading...</p>}

  return user ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;
