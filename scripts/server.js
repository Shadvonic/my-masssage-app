const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a custom middleware to enable CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Define a route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a route to handle requests for Google Reviews data
app.get('/reviews', async (req, res) => {
    try {
        // Fetch Google Reviews data using Place ID and API Key
        const placeId = '0x89c2634d608d9871:0x6d0bb4d57395792b'; // Replace with your actual Place ID
        const apiKey = 'AIzaSyAeAe32x8XCpxrytFGu55632lG05gV7h2g'; // Replace with your actual API Key
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        // Extract and send reviews in response
        if (data.result && data.result.reviews) {
            const reviews = data.result.reviews.map(review => ({
                author: review.author_name,
                text: review.text,
                rating: review.rating
            }));
            res.json(reviews);
        } else {
            throw new Error('No reviews found');
        }
    } catch (error) {
        console.error('Error fetching Google Reviews:', error);
        res.status(500).json({ error: 'Error fetching Google Reviews' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
