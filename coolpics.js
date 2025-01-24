// coolpics.js

// An array of image URLs for the gallery
const images = [
    'https://via.placeholder.com/200x150?text=Pic+1',
    'https://via.placeholder.com/200x150?text=Pic+2',
    'https://via.placeholder.com/200x150?text=Pic+3',
    'https://via.placeholder.com/200x150?text=Pic+4',
  ];
  
  // Function to dynamically add images to the gallery
  function loadGallery() {
    const gallery = document.getElementById('gallery');
    images.forEach(imageUrl => {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Cool Pic';
      gallery.appendChild(img);
    });
  }
  
  // Load the gallery when the page is loaded
  window.onload = loadGallery;
  