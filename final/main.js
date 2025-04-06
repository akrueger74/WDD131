import starwars from "./starwars.mjs";

const container = document.querySelector('.image-container');
const image = container.querySelector('img');
const modal = document.getElementById('planetModal');
const modalTitle = document.getElementById('modal-planet-title');
const modalInfo = document.getElementById('modal-planet-info');
const closeButton = document.querySelector('.close-button');
let originalImageWidth;
let originalImageHeight;



function positionCircles() {
  if (!originalImageWidth || !originalImageHeight) {
    return;
  }

  const imageWidth = image.offsetWidth;
  const imageHeight = image.offsetHeight;

  // Remove existing circles before repositioning
  const existingCircles = container.querySelectorAll('.overlay-circle');
  existingCircles.forEach(circle => circle.remove());

  starwars.forEach((data) => {
    const absoluteX = (data.xPercent / 100) * imageWidth;
    const absoluteY = (data.yPercent / 100) * imageHeight;
    const absoluteRadius = (data.radiusPercent / 100) * Math.min(imageWidth, imageHeight); // Scale radius proportionally

    const circle = document.createElement('div');
    circle.classList.add('overlay-circle');
    circle.style.width = `${absoluteRadius * 2}px`;
    circle.style.height = `${absoluteRadius * 2}px`;
    circle.style.left = `${absoluteX - absoluteRadius}px`;
    circle.style.top = `${absoluteY - absoluteRadius}px`;
    container.appendChild(circle);

    circle.addEventListener('click', () => {
      openModal(data);
    });
  });
}

function openModal(planetData) {
  console.log("Modal Opened")
  modalTitle.textContent = planetData.planet;

  modalInfo.innerHTML = `
    <p>Planet Name: ${planetData.planet}</p>
    <p>Region: ${planetData.region}</p>
    <p>Politics: ${planetData.politics}</p>
    `;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

closeButton.addEventListener('click', closeModal);

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    closeModal();
  }
});

// Get original image dimensions after it loads
image.onload = function() {
  originalImageWidth = this.naturalWidth;
  originalImageHeight = this.naturalHeight;
  positionCircles();
};

// Reposition circles on window resize
window.addEventListener('resize', positionCircles);

// Call once in case the image is already cached
if (image.complete) {
  image.onload();
}