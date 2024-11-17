import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',              // Enable flexbox
    justifyContent: 'space-between', // Distribute links evenly with space between them
    alignItems: 'center',
    textDecoration:  'none',         // bar
    backgroundColor: '#333',      
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
  };

  const linkStyle = {
    color: '#fff',                // White text color for links
    textDecoration: 'none',       // Remove underline from links
    padding: '8px 16px',          // Add padding around each link for better spacing
    fontSize: '18px',             // Set font size for readability
    borderRadius: '4px',          // Rounded corners for each link
    transition: 'background-color 0.3s ease', // Smooth transition for hover effect
  };

  const linkHoverStyle = {
    backgroundColor: '#555',      // Darker background on hover
  };

  return (
    <nav style={navStyle}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={linkStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#555'} onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
          Home
        </Link>
        <Link to="/about" style={linkStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#555'} onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
          About
        </Link>
        <Link to="/services" style={linkStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#555'} onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
          Services
        </Link>
        <Link to="/contact" style={linkStyle} onMouseEnter={(e) => e.target.style.backgroundColor = '#555'} onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
