// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="footer-container">
//       <h1 className="text-7xl font-bold">NORTHERN HEIGHTS HOTEL</h1>
//       <address className="text-sm">
//         Plot 4, Acholi Lane<br />
//         Gulu, Uganda<br />
//         +256 772 631 400
//       </address>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '15vh',
      flexDirection: 'column',
      padding: '24px',
      backgroundColor: '#333333',
      color: '#ffffff',
    }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>NORTHERN HEIGHTS HOTEL</h1>
      <address style={{ fontSize: '16px' }}>
        Plot 4, Acholi Lane<br />
        Gulu, Uganda<br />
        +256 772 631 400
      </address>
    </footer>
  );
};

export default Footer;