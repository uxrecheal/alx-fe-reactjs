import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#4CAF50',
    padding: '10px 20px',
    textAlign: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    fontSize: '18px',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;
