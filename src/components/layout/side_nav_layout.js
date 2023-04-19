import React, { Fragment } from "react";
import SideBar from "../Sidebar/sideBar";
import image from "../assents/notification-icons.png";
import "../../index.css";
import Button from "../UI/Button/Button";
import Dashboard from "../Deshboard/Deshboard";
import classes from './nav.module.css';
import { Navigate, useNavigate } from "react-router-dom";


export const SideNavLayout = (props) => {
  const navigate =useNavigate();
  return (
    <Fragment>
      <div>
      <nav className={classes.nav}>
        <header>HR</header>
        <div className="nav-left">
        <img src={image} style={{ background: "white" }}/>
        <Button className="button" onClick={()=>{
          localStorage.removeItem('token');
          navigate('/');
        }}>Logout</Button>
        </div>
      </nav>
      {/* <Dashboard/> */}
      <div className={classes.sideNav}>
        <SideBar />
        <div>{props.children}</div>
      </div>

    </div>  
    </Fragment>
  );
};
