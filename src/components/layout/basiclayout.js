/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import SearchBar from "../../SearchBar/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../../components/assents/logo.jpg'
import "./basiclayout.css";
import Button from "../UI/Button/Button";
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaUser,
    
    
}from "react-icons/fa";
import { NavLink} from 'react-router-dom';

function Basiclayout(props) {
    const[isOpen ,setIsOpen] = useState(false);
    const navigate = useNavigate()
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/people",
            name:"People",
            icon:<FaUserAlt/>
        },
        {
            path:"/addPeople",
            name:"Add People",
            icon:<FaUser/>
        },
        
    ]

  return (
    
    <div  className="container1">
      <div className="item-1">
        <h1 className="Title">HR MANAGEMENT</h1>
        <Button className="button" onClick={()=>{
          localStorage.removeItem('token');
          navigate('/');
        }}>Logout</Button>
        {/* <SearchBar /> */}
      </div>
      <div className="item-2">
      <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar1">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img src={logo} alt="logo" className="logo"></img></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
    
           </div>
        <div className="item-3">{props.children}</div>
      </div>
     
    </div>
  );
}

export default Basiclayout;
