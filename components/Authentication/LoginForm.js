import { useState, useContext, Fragment } from "react";

import ModalDialog from "../UI/ModalDialog";

import AuthenticationContext from "../../store/authentication-context";

import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const authenticationContext = useContext(AuthenticationContext);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredEmail.includes("@") && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const loginHandler = () => {
    authenticationContext.onLogin(enteredEmail, enteredPassword);
  };

  const autoFillHandler = () => {
    setEnteredEmail("demo@demo.com");
    setEnteredPassword("demo123");
    setFormIsValid(true);
  };

  return (
    <ModalDialog
      isOpen={props.isOpen}
      title="Login"
      acceptButtonText="Login"
      onAccept={loginHandler}
      hasCancelButton={true}
      formIsValid={formIsValid}
      onClose={authenticationContext.hideLoginForm}
    >
      <div className={classes.info}>
        Use this dummy account to login:
        <br />
        <b>Email:</b> demo@demo.com
        <br />
        <b>Password:</b> demo123
        <br />
        <a onClick={autoFillHandler}>Click here to autofill!</a>
      </div>
      <form className={classes.form}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            required
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            required
          />
        </div>
      </form>
    </ModalDialog>
  );
};

export default LoginForm;
