// // Select the navbar
const navbar = document.getElementById('navbar');

// // Variables to track inactivity
let inactivityTimeout;

// // Function to show the navbar
function showNavbar() {
   navbar.style.opacity = '1'; // Ensure it's fully visible
   navbar.style.transform = 'translateY(0)'; // Reset position
}

// Function to hide the navbar
function hideNavbar() {
   navbar.style.opacity = '0'; // Make it invisible
   navbar.style.transform = 'translateY(-100%)'; // Move it out of view
}

// Function to reset the inactivity timer
function resetInactivityTimer() {
  // Show the navbar when activity is detected
  showNavbar();

  // Clear the previous inactivity timeout
  clearTimeout(inactivityTimeout);

  // Set a new inactivity timeout to hide the navbar
  inactivityTimeout = setTimeout(() => {
    hideNavbar();
  }, 2000);
}

// Event listener for scrolling
window.addEventListener('scroll', () => {
  // Sticky effect logic
  if (window.scrollY > 300) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }

  // Reset inactivity timer on scroll
  resetInactivityTimer();
});

// Event listener for mouse movement
window.addEventListener('mousemove', resetInactivityTimer);

// Event listener for touch (on mobile devices)
window.addEventListener('touchstart', resetInactivityTimer);

// Initial setup to ensure the navbar is visible on page load
resetInactivityTimer();


// Mobile-Tablet menu 
function openMenu(){
  let menu = document.getElementById("mobile-menu");
  let body = document.getElementById("main-body");

  menu.style.display = "flex";
  body.style.overflow = "hidden";
}


function exitMenu(){
  let menu = document.getElementById("mobile-menu");
  let body = document.getElementById("main-body");
  
  menu.style.display = "none";
  body.style.overflow = "auto";
}