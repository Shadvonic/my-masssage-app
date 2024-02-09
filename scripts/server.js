
/*
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route to handle requests for Google Reviews data
app.get('/reviews', (req, res) => {
    // Logic to fetch and return Google Reviews data
    // Replace this with your actual implementation
    const reviews = [
        { author: 'John Doe', text: 'Great service!', rating: 5 },
        { author: 'Jane Smith', text: 'Highly recommended!', rating: 4 },
        // More review objects...
    ];
    res.json(reviews);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

*/