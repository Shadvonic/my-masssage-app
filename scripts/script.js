document.addEventListener("DOMContentLoaded", function () {
    // Fetch Google Reviews data using Place ID and API Key
    const placeId = '0x89c2634d608d9871:0x6d0bb4d57395792b'; // Replace with your actual Place ID
    const apiKey = 'AIzaSyAeAe32x8XCpxrytFGu55632lG05gV7h2g'; // Replace with your actual API Key
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Extract and display reviews
            if (data.result && data.result.reviews) {
                const reviews = data.result.reviews;
                const reviewsList = document.getElementById('reviews-list');

                reviews.forEach(review => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <div class="review-item">
                            <div class="author">${review.author_name}</div>
                            <div class="rating">Rating: ${review.rating}</div>
                            <div class="text">${review.text}</div>
                        </div>
                    `;
                    reviewsList.appendChild(listItem);
                });
            } else {
                console.error('No reviews found');
            }
        })
        .catch(error => {
            console.error('Error fetching Google Reviews:', error);
        });
});


/*
function initMap() {
    var mapOptions = {
        center: {lat: 40.6869, lng: -73.6475}, // Adjust to center the map on your desired location
        zoom: 15, // Adjust the zoom level as needed
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    var marker = new google.maps.Marker({
        position: {lat: 40.6869, lng: -73.6475}, // Adjust to set the marker at your desired location
        map: map,
        title: '455 Maryann Ln, West Hempstead, NY 11552, United States'
    });
}

*/