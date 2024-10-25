
// import React from 'react';
// import Navbar from '../components/Navbar';
// import './Home.css';
// import "./Footer.js";
// import Footer from './Footer.js';

// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="home-container">
//         <div className="home-content">
//           <h1>Welcome to Northern Heights Hotel</h1>
//           <h2>Elegance Redefined to Embrace the Luxury</h2>
//           <img src="images/double room/new.jpg" alt="Hotel Image" width={600} style={{ borderRadius: '50%' }} />
//           <div className="text-with-image">
//             <p>
//               Experience the essence of luxury at NORTHERN HEIGHTS HOTEL. 
//               We are dedicated to providing exceptional service and exquisite design. From our plush linens to personalized concierge services,
//               every detail is crafted to ensure a remarkable stay.
//               Explore our site to discover more and reserve your stay today.
//             </p>
//             <img src="/images/new pics/0012.jpg" alt="Another Image" className="inline-image" />
//           </div>
//           <Link to="/book" className="book-now-button">Book Now</Link>
//         </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Home.css';
import Footer from './Footer.js';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to Northern Heights Hotel</h1>
          <img src="/0017.jpg" alt="Hotel Image" width={250} className="semi-circle-image" />
          <h2>Elegance Redefined to Embrace the Luxury</h2>
          <div className="text-with-image">
            <p>
              Experience the essence of luxury at NORTHERN HEIGHTS HOTEL. 
              We are dedicated to providing exceptional service and exquisite design. From our plush linens to personalized concierge services,
              every detail is crafted to ensure a remarkable stay.
              Explore our site to discover more and reserve your stay today.
            </p>
            <img src="/images/new pics/0012.jpg" alt="Another Image" className="inline-image" />
          </div>
          <Link to="/book" className="book-now-button">Book Now</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;