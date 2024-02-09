
/*
// Define event listener for document ready
document.addEventListener('DOMContentLoaded', function() {
    // Execute code when the DOM is fully loaded

    // Example: Fetch Google Reviews data
    fetchGoogleReviews();
});

// Function to fetch Google Reviews data
function fetchGoogleReviews() {
    // Make a GET request to your backend server to fetch Google Reviews data
    fetch('/reviews')
        .then(response => response.json())
        .then(data => {
            // Process the fetched data
            displayReviews(data);
        })
        .catch(error => {
            console.error('Error fetching Google Reviews:', error);
        });
}

// Function to display Google Reviews on the webpage
function displayReviews(reviews) {
    // Example: Update the DOM with the fetched reviews
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '';

    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <h3>${review.author}</h3>
            <p>${review.text}</p>
            <p>Rating: ${review.rating}</p>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}
*/