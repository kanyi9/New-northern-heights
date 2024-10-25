// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <div><nav className="navbar">
      
        
//    <li> <NavLink to="/">Home</NavLink></li>
  
  
//     <NavLink to="/gallery">Gallery</NavLink>
  
  
//     <NavLink to="/book">Book Now</NavLink>
  

// </nav></div>
    
//   );
// };

// export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/gallery" activeClassName="active">
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/book" activeClassName="active">
              Book Now
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;