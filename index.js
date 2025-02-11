// index.jsx

// Load environment variables from the .env file
require('dotenv').config();

// Import Express and initialize the app
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Define a simple route to verify that the server is up and running
app.get('/', (req, res) => {
    res.send('Bot is running!');
});

// Start the Express server
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});

// Import and run the bot logic from bot.js
require('./bot.js');
