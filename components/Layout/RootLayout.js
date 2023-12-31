import { useState, useEffect } from "react";

import LoginForm from "../Authentication/LoginForm";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

import AuthenticationContext from "../../store/context-api/authentication-context";
import configureFavoritesStore from "../../store/custom-hooks/favorite-ids-store";

import classes from "./RootLayout.module.css";

configureFavoritesStore();

const RootLayout = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFormIsOpen, setLoginFormIsOpen] = useState(false);

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
    setLoginFormIsOpen(false);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const showLoginFormHandler = () => {
    setLoginFormIsOpen(true);
  };

  const hideLoginFormHandler = () => {
    setLoginFormIsOpen(false);
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
        {loginFormIsOpen && <LoginForm isOpen={loginFormIsOpen} />}
        <MainNavigation />
        <main className={classes.main}>{props.children}</main>
        <Footer />
      </div>
    </AuthenticationContext.Provider>
  );
};

export default RootLayout;
