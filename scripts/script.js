// Fetch Google Reviews from the server
fetch('/reviews')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(reviews => {
    // Populate the carousel with reviews
    const carouselInner = document.getElementById('carouselInner');
    carouselInner.innerHTML = '';

    reviews.forEach(review => {
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('carousel-item');
      reviewElement.innerHTML = `
        <div class="carousel-caption">
          <h5>${review.author}</h5>
          <p>${review.text}</p>
          <p>Rating: ${review.rating}</p>
        </div>
      `;
      carouselInner.appendChild(reviewElement);
    });

    // Set the first review as active
    carouselInner.firstChild.classList.add('active');
  })
  .catch(error => {
    console.error('Error fetching Google Reviews:', error);
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