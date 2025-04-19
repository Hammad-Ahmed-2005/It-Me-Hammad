function positionButtonDiv() {
  const container = document.querySelector('.container');
  const buttonDiv = document.querySelector('.button-div');

  // Get container dimensions
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  // Reference image dimensions (replace with actual if known)
  const refWidth = 1920; // Image width (e.g., 1920 for 1920x1080)
  const refHeight = 1080; // Image height (e.g., 1080 for 1920x1080)

  // Calculate scale factors (inspired by moviepalaceonline.com)
  const scaleX = containerWidth / refWidth;
  const scaleY = containerHeight / refHeight;
  const scale = Math.max(scaleX, scaleY); // Mimics background-size: cover

  // Calculate visible image dimensions after scaling
  const visibleWidth = refWidth * scale;
  const visibleHeight = refHeight * scale;

  // Calculate cropping offsets
  const offsetX = (containerWidth - visibleWidth) / 2;
  const offsetY = (containerHeight - visibleHeight) / 2;

  // TV button's coordinates in the reference image (as percentages)
  const buttonXPercent = 54; // From your original left: 57.5%
  const buttonYPercent = 66.2; // From your original top: 69%

  // Map button coordinates to container
  const buttonX = offsetX + (buttonXPercent / 100) * visibleWidth;
  const buttonY = offsetY + (buttonYPercent / 100) * visibleHeight;

  // Set position
  buttonDiv.style.left = `${(buttonX / containerWidth) * 100}%`;
  buttonDiv.style.top = `${(buttonY / containerHeight) * 100}%`;

  // Set fixed size scaled by reference resolution
  const baseSize = 75; // Base size in pixels at reference resolution (adjust if needed)
  const scaledSize = baseSize * scale; // Scale size based on image scaling
  buttonDiv.style.width = `${scaledSize}px`;
  buttonDiv.style.height = `${scaledSize}px`;
}

// Run on load and resize
window.addEventListener('load', positionButtonDiv);
window.addEventListener('resize', positionButtonDiv);
window.addEventListener('resize', () => setTimeout(positionButtonDiv, 100));

const buttonDiv = document.querySelector('.button-div');
const container = document.querySelector('.container');
const offBtn = document.getElementById('off');
const onBtn = document.getElementById('on');

offBtn.style.display = "block";
onBtn.style.display = "none";

buttonDiv.addEventListener('click', () => {
  
  if (offBtn.style.display === "block") {
    onBtn.style.display = "block";
    offBtn.style.display = "none";
    container.style.transform = "scale(1.6)";
    if (playaud) {
      playaud.play().catch((error) => {
        console.error("Audio play error:", error);
      });
    }
  } else {
    offBtn.style.display = "block";
    onBtn.style.display = "none";
    container.style.transform = "scale(1)";
    if (playaud) {
      playaud.play().catch((error) => {
        console.error("Audio play error:", error);
      });
    }
  }
});

  

  
