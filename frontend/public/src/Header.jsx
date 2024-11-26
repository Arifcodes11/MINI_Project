import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/disease">Detection</Link></li>
          <li className="nav-item"><Link to="/temperature">Temperature</Link></li>
          <li className="nav-item"><Link to="/about">About Us</Link></li>
          <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
          <li className="nav-item"><Link to="/Register">Join Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



