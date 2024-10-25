const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'peterkanyi19193@gmail.com', // Replace with your email address
    pass: 'Peter#', // Replace with your email password
  },
});

// Handle the form submission
app.post('/book', (req, res) => {
  const { email, checkInDate, checkOutDate, numberOfGuests } = req.body;

  // Create the email content
  const mailOptions = {
    from: 'peterkanyi19193@gmail.com', // Replace with your email address
    to: 'fredykingori @gmail.com', // Replace with the hotel owner's email address
    subject: 'New Booking Request',
    text: `
      New booking request:

      Email: ${email}
      Check-in Date: ${checkInDate}
      Check-out Date: ${checkOutDate}
      Number of Guests: ${numberOfGuests}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});