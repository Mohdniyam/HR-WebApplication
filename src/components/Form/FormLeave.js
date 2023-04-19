import React, { useState } from "react";
import Button from "../UI/Button/Button";
import axios from "axios";
import Basiclayout from "../layout/basiclayout";
export default function FormLeave(props) {
  const [name, setName] = useState("");

  const [leave, setLeave] = useState("");
  const[file, setFile] = useState("");



  const nameHandler = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const leaveHandler = (event) => {
    setLeave(event.target.value);
    console.log(leave)
  };
  const url = "http://localhost:5000/users";
const createImage = (newImage) => axios.post(url, newImage);

  const createPost = async (post) => {
    try {
      await createImage(post);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleFileUpload = (e)=>{
    console.log(e.target.value)
  }

  const handleChange = (event) => {
    event.preventDefault();
  //  if(name == '' && leave == ''){
  //   return alert("entered input value");
  //  }
 
  
  return (
    <Basiclayout>
      <h1>Helllo</h1>
    </Basiclayout>
  );
}
}