const timelineContainer = document.querySelector('.timeline-container');

// Add support for touchpad horizontal scrolling
timelineContainer.addEventListener('wheel', (event) => {
  // Check if it's a horizontal scroll event (deltaX) or a vertical-to-horizontal scroll (deltaY)
  if (event.deltaX !== 0 || event.deltaY !== 0) {
    event.preventDefault();
    timelineContainer.scrollLeft += event.deltaY !== 0 ? event.deltaY : event.deltaX;
  }
});

// Add drag-to-scroll functionality for mouse users
let isDragging = false;
let startX;
let scrollLeft;

timelineContainer.addEventListener('mousedown', (event) => {
  isDragging = true;
  startX = event.pageX - timelineContainer.offsetLeft;
  scrollLeft = timelineContainer.scrollLeft;
  timelineContainer.classList.add('dragging');
});

timelineContainer.addEventListener('mouseleave', () => {
  isDragging = false;
  timelineContainer.classList.remove('dragging');
});

timelineContainer.addEventListener('mouseup', () => {
  isDragging = false;
  timelineContainer.classList.remove('dragging');
});

timelineContainer.addEventListener('mousemove', (event) => {
  if (!isDragging) return;
  event.preventDefault();
  const x = event.pageX - timelineContainer.offsetLeft;
  const distance = (x - startX) * 1.5; // Adjust speed
  timelineContainer.scrollLeft = scrollLeft - distance;
});

// Add touch-based scrolling for mobile devices
let touchStartX = 0;

timelineContainer.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].pageX;
});

timelineContainer.addEventListener('touchmove', (event) => {
  const touchX = event.touches[0].pageX;
  const touchDistance = touchStartX - touchX;
  timelineContainer.scrollLeft += touchDistance;
  touchStartX = touchX;
});






// Prevent text selection during drag
timelineContainer.style.userSelect = 'none';

// Animate progress bars and numbers
function animateProgressBars() {
    const skills = document.querySelectorAll(".skill");
  
    skills.forEach((skill) => {
      const percentage = parseInt(skill.getAttribute("data-percentage"));
      const progressBar = skill.querySelector(".progress-bar");
      const percentageDisplay = skill.querySelector(".progress-percentage");
      const totalCircumference = 2 * Math.PI * 45; // 2πr where r=45
      const offset = totalCircumference - (percentage / 100) * totalCircumference;
  
      // Animate the progress bar
      progressBar.style.transition = `stroke-dashoffset 2s ease`;
      progressBar.style.strokeDashoffset = `${offset}`;
  
      // Animate the number
      let currentNumber = 0;
      const duration = 2000; // 2 seconds
      const interval = 10; // Update every 10ms
      const step = (percentage / duration) * interval;
  
      const intervalId = setInterval(() => {
        currentNumber += step;
        if (currentNumber >= percentage) {
          currentNumber = percentage;
          clearInterval(intervalId);
        }
        percentageDisplay.textContent = `${Math.round(currentNumber)}%`;
      }, interval);
    });
}
  
  // Observe when the skills section enters the viewport
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateProgressBars();
          observer.disconnect(); // Ensure it animates only once
        }
      });
    },
    { threshold: 0.5 } // Trigger when 50% of the section is visible
);
  
// Start observing the skills section
observer.observe(document.querySelector("#skills-section"));
  