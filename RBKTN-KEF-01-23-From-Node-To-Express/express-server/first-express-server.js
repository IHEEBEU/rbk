const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3000; // You can change this to any available port number you prefer

app.use(cors()); // Enable CORS for all routes

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, this is the homepage!');
});

// Define a route for another page
app.get('/about', (req, res) => {
  res.send('This is the about page!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});