import { Fragment, useState, useContext } from "react";
import Link from "next/link";

import Button from "../UI/Button";

import AuthenticationContext from "../../store/authentication-context";

import classes from "./MainNavigation.module.css";
import ModalDialog from "../UI/ModalDialog";

const MainNavigation = () => {
  const [logoutFormIsOpen, setLogoutFormIsOpen] = useState(false);

  const authenticationContext = useContext(AuthenticationContext);

  const showLogoutFormHandler = () => {
    setLogoutFormIsOpen(true);
  };

  const hideLogoutFormHandler = () => {
    setLogoutFormIsOpen(false);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>SnareMaster</div>
        <nav>
          <ul>
            <li>
              <Link href="/">Products</Link>
            </li>
            {authenticationContext.isLoggedIn && (
              <li>
                <Link href="/favorites">Favorites</Link>
              </li>
            )}
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            {!authenticationContext.isLoggedIn && (
              <li>
                <Button onClick={authenticationContext.showLoginForm}>
                  Login
                </Button>
              </li>
            )}
            {authenticationContext.isLoggedIn && (
              <li>
                <Button onClick={showLogoutFormHandler}>Logout</Button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      {logoutFormIsOpen && (
        <ModalDialog
          isOpen={logoutFormIsOpen}
          title="Logout"
          acceptButtonText="Yes"
          onAccept={authenticationContext.onLogout}
          hasCancelButton={true}
          cancelButtonText="No"
          onClose={hideLogoutFormHandler}
        >Do you really want to logout?</ModalDialog>
      )}
    </Fragment>
  );
};

export default MainNavigation;
