import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

const useAuth = () => {
  const Token = localStorage.getItem("token");
  if (Token) {
    return true;
  } else {
    return false;
  }
};
export default function Public() {
  const [pathLocation, setPathLocation] = useState("/dashboard");
  // const location = useLocation();
  const { pathname, location } = useLocation();
  // console.log(location)
  const auth = useAuth();

  useEffect(() => {
    console.log(location);
    if (location?.state?.from) {
      setPathLocation(location?.state?.from);
    }
  }, [location]);

  if (auth) {
    return <Navigate to={pathLocation} state={{ from: pathname }} replace />;
  }

  return <Outlet />;
}
