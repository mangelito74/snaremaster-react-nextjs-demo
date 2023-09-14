import { useContext } from "react";
import Link from "next/link";

import Button from "../UI/Button";

import AuthenticationContext from "../../store/authentication-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const authenticationContext = useContext(AuthenticationContext);

  return (
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
              <Button onClick={authenticationContext.onLogout}>Logout</Button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
