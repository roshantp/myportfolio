// Homepage Projects
let slideIndex = 1;
mProjectSlides(slideIndex);

function mProjectSlides(n) {
  let i;
  let slides = document.getElementsByClassName("m-projects");

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  let y = slides[slideIndex-1]
  y.style.display = "flex";  
}

function mProjectSlidePlus(n) {
  mProjectSlides(slideIndex += n);
}

function currentSlide(n) {
    mProjectSlides(slideIndex = n);
}