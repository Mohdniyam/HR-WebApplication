import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/UI/Button/Button";
import Card from "../components/UI/Card/Card";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


import classes from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
  };

  return (
   <Card>
   <form className={classes.InputField}>
        <h1 className={classes.heading}>Signup</h1>

        <input
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <input
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <input
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <div className={classes.footer}>
          <b className={classes.error}>{errorMsg}</b>
          <Button onClick={handleSubmission} disabled={submitButtonDisabled}>
            Signup
          </Button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/">Login</Link>
            </span>
          </p>
        </div>
     </form>
     </Card>

   
  );
}

export default Signup;