import React, { useState } from 'react';
import { useNavigate, Link} from 'react-router-dom';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [IsLoggedin, setIsLoggedin] = useState(false);
  let navigate = useNavigate();


  
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  

    setFormIsValid(
      event.target.value.includes('@') && enteredPassword.trim().length > 6
      
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
    
  };
 
  const email = localStorage.getItem("enteredEmail");
  const password1 = localStorage.getItem("enteredPassword");

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      enteredEmail,
      enteredPassword,
    };
  
    setIsLoggedin(true);
    setEnteredEmail('');
    setEnteredPassword('');
    console.log(enteredEmail, enteredPassword);

    if(enteredEmail == "niyam@gmail.com" && enteredPassword == "12345678"){
      localStorage.setItem('token', 'somevalue')
      navigate('/dashboard');

    }
    else{
      alert("entered valid  email address & password");
    }
 

 }


  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid} >
            Login
          </Button>
          <p>
            If you Don't Have Account Plz Sign In?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </form>
    </Card>
  );
};

export default Login;
