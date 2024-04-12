const button = document.getElementById('animate-button');

// Function to toggle animation class
function toggleAnimation() {
    button.classList.toggle('pulse');
}

// Trigger animation on button click
button.addEventListener('click', toggleAnimation);

