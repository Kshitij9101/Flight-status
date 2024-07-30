Flight Status System

The Flight Status System is a web application designed to provide real-time flight status updates and notifications to passengers.
It allows users to view flight statuses, receive notifications about changes, and allows admins to update flight information. 
The system utilizes modern technologies including React.js, Node.js, Kafka, and Nodemailer for a responsive and efficient experience.

Features
Real-Time Flight Status Updates: View current flight status and gate changes.
Subscription Management: Users can subscribe to receive updates for specific flights.
Admin Portal: Admins can update flight statuses which are then broadcasted to all subscribers.
Email Notifications: Subscribers receive notifications via email when their subscribed flight status changes.
Tech Stack
Frontend:

React.js: For building dynamic user interfaces.
HTML/CSS: For structure and styling.
Backend:

Node.js & Express.js: For server-side logic and API endpoints.
MongoDB: For storing flight status and subscription data.
Real-Time Updates:

Kafka: For managing real-time data streams and updates.
Nodemailer: For sending email notifications to users.
