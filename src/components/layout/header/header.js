import { Link } from 'react-router-dom';

import classes from './header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>My Readings Books Tracker</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
