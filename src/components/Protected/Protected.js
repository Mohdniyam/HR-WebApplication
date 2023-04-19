import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../Deshboard/Deshboard";
import { DataInfo } from "../GlobalContext/GlobalContext";
import Login from "../Login/Login";

export default function Protected(props) {
  const { components } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const tokenValue = localStorage.getItem("token");
  console.log(tokenValue)
 
    if(!tokenValue){
      return <Navigate to="/" />
    }
   



  return <Outlet />;
}
