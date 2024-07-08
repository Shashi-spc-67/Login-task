import React from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import "../css/Navbar.css"

const Navbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate.push('/login');
//   };

  return (
    <nav className="navbar">
      <h1>App Name</h1>
      <div>
      <Link to="/">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/users">User Management</Link>
        {/* <button onClick={handleLogout}>Logout</button> */}
      </div>
    </nav>
  );
};

export default Navbar;