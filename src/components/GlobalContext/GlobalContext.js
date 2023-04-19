/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const DataInfo = createContext();

export default function GlobalContext(props) {
  const [UserData, setUserData] = useState([]);
  useEffect(async () => {
    const response = await axios.get("http://localhost:5000/users");
    console.log(response.data);
    setUserData(response.data);

  }, []);

  return (
    <DataInfo.Provider
      value={{
        data: [UserData],
        x: "acd"
      }}
    >
      {props.children}
    </DataInfo.Provider>
  );
}
