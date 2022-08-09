import "./styles.css";

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary main-nav">
      <div className="container-nav">
        <Link to="/">
          <h4>Github API</h4>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
