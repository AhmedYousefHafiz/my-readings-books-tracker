import { Link } from "react-router-dom";

import classes from "./header.module.css";
import { useAppSelector,useAppDispatch } from "../../../store/hooks";
import { authActions } from "../../../store/auth-slice";

const Header = () => {
  const authDispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(state => state.authStore.isLoggedIn);

  console.log("isLoggedIn:" + isLoggedIn);

  const logoutHandler = () => {
    authDispatch(authActions.toggleAuth());
  };
  const loginHandler = () => {
    authDispatch(authActions.toggleAuth());
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>My Readings Books Tracker</div>
      </Link>
      <nav>
        <ul>
          {isLoggedIn && (
            <li>
              <button onClick={loginHandler}>Login</button>
            </li>
            // <li>
            //   <Link to="/auth">Login</Link>
            // </li>
          )}
          {!isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
