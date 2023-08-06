import Link from "next/link";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>SnareMaster</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All products</Link>
          </li>
          <li>
            <Link href="/my-order">My order</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          {/* <li>
            <Link href="/logout">Logout</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
