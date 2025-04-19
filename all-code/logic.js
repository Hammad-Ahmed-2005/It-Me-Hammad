function resizeButtonDiv() {
  const img = document.querySelector('.container img');
  const buttonDiv = document.querySelector('.button-div');
  // Use image's rendered width to calculate size (e.g., 5% of image width)
  const size = img.clientWidth * 0.01; // Adjust 0.05 for desired scale
  buttonDiv.style.width = `${size}px`;
  buttonDiv.style.height = `${size}px`;
}

// Run on load, resize, and zoom
window.addEventListener('load', resizeButtonDiv);
window.addEventListener('resize', resizeButtonDiv);
// Handle zoom changes (may require debouncing for performance)
window.addEventListener('resize', () => setTimeout(resizeButtonDiv, 100));

  

  