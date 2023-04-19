import React, { useState } from "react";
import Basiclayout from "../layout/basiclayout";
import "./AddPeople.css";
import axios from "axios";

export default function AddPeople() {
  const [name, setName] = useState("");
  const [leave, setLeave] = useState("");
  const [file, setFile] = useState("");

  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setFile(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error reading", error);
    };
  }

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const leaveHandler = (e) => {
    setLeave(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users", {
        name,
        leave,
        file,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      setName('');
      setLeave('');
      setFile('');
  };

  return (
    <Basiclayout>
      <form className="form" onSubmit={submitHandler}>
        <h1>Registration Form</h1>
        <div className="form-body">
          <div className="username ">
            <label className="form__label" for="Name">
              Name
            </label>
            <input
              className="form__input"
              type="text"
              id="Name"
              value={name}
              placeholder="Enter your Name"
              onChange={nameHandler}
            />
          </div>
          <div className="leave">
            <label className="form__label" for="Leave">
              Number of Leave
            </label>
            <input
              type="number"
              name=""
              id="Leave"
              className="form__input"
              value={leave}
              placeholder="Leave"
              onChange={leaveHandler}
            />
          </div>
          <div className="File">
            <label className="form__label" for="file">
              Upload File
            </label>
            <input
              type="file"
              id="file"
              className="form__input"
              onChange={convertToBase64}
            />
          </div>
        </div>
        <div class="footer">
          <button type="submit" class="btn">
            Register
          </button>
        </div>
      </form>
    </Basiclayout>
  );
}
