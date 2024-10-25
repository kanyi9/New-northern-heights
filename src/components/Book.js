
import React, { useState } from 'react';
import './Book.css'; // You can create this file for custom styling

const Book = () => {
  const [formData, setFormData] = useState({
    email: '',
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        window.alert('Booking request sent successfully');
        setFormData({
          email: '',
          checkInDate: '',
          checkOutDate: '',
          numberOfGuests: '',
        });
        window.location.href = '/'; // Redirect to the home page
      } else {
        alert('Error sending booking request');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending booking request');
    }
  };

  return (
    <div className="book-form-container">
      <h1>Book Your Stay</h1>
      <form className="book-form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Check-in Date</label>
        <input
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
          required
        />

        <label>Check-out Date</label>
        <input
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
          required
        />

        <label>Number of Guests</label>
        <input
          type="number"
          name="numberOfGuests"
          min="1"
          value={formData.numberOfGuests}
          onChange={handleChange}
          required
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};
  

export default Book;
