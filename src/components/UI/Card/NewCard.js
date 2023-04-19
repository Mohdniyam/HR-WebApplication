import React, { useEffect, useState } from "react";
import humanImage from "../../assents/humanImage.png";

export default function NewCard(props) {
  const [file, setFile] = useState("");

  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(humanImage);
    reader.onload = () => {
      setFile(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error reading", error);
    };
  }

  useEffect(()=>{
    Object.keys(props).map(key =>{
      if(props.img==undefined){
        console.log("img log : ", props.img);
      }
    })
  },[])

  return (
    <div className="card">
      <img
        src={props?.img ? props.img :humanImage}
        alt={"imageNotFound"}
        width={100}
        height={100}
      />
      <h1 style={{ color: "#fff" }}>{props.name}</h1>
      <h3 className="customer_designation" style={{ color: "#fff" }}>
        Leave : {props.gender}
      </h3>
    </div>
  );
}
