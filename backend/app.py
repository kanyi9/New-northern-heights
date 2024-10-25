from flask import Flask, request, jsonify, render_template
import smtplib
from email.mime.text import MIMEText
from flask_cors import CORS # type: ignore
import os
from flask_mail import Mail, Message # type: ignore

app = Flask(__name__)
CORS(app)  # To allow cross-origin requests

# Email configuration
HOTEL_EMAIL = "fredykingori@gmail.com"  # Hotel owner email address
SMTP_SERVER = "smtp.gmail.com"  # Replace with actual SMTP server
SMTP_PORT = 465
SMTP_USER = "peterkanyi19193@gmail.com"
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")  # Retrieve password from environment variable

@app.route('/book', methods=['POST' ])
def book_room():
    try:
        # Get data from the form
        data = request.json
        email = data.get('email')
        check_in = data.get('checkInDate')
        check_out = data.get('checkOutDate')
        guests = data.get('numberOfGuests')

        # Create email content
        subject = f"New Booking Request from {email}"
        body = f"Booking Details:\n\nEmail: {email}\nCheck-in: {check_in}\nCheck-out: {check_out}\nGuests: {guests}"

        # Send email to hotel owner
        msg = MIMEText(body)
        msg['Subject'] = subject
        msg['From'] = email
        msg['To'] = HOTEL_EMAIL

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()  # Secure connection
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.sendmail(email, HOTEL_EMAIL, msg.as_string())

        return jsonify({"message": "Booking request sent successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=False)