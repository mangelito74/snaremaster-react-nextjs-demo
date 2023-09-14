import { useState, useEffect } from "react";

import LoginForm from "../Authentication/LoginForm";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

import AuthenticationContext from "../../store/authentication-context";

import classes from "./RootLayout.module.css";

const RootLayout = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFormIsShown, setLoginFormIsShown] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    setLoginFormIsShown(false);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const showLoginFormHandler = () => {
    setLoginFormIsShown(true);
  };

  const hideLoginFormHandler = () => {
    setLoginFormIsShown(false);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
        showLoginForm: showLoginFormHandler,
        hideLoginForm: hideLoginFormHandler,
      }}
    >
      <div id="overlays"></div>
      <div>
        {loginFormIsShown && <LoginForm />}
        <MainNavigation />
        <main className={classes.main}>{props.children}</main>
        <Footer />
      </div>
    </AuthenticationContext.Provider>
  );
};

export default RootLayout;
