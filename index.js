//Image Slider

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//This way wait for the DOM to load
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    //check if there are images
    if(slides.length > 0){
        // With this we add that propertie to the one slide
        // and the images with said propertie will be shown
        slides[slideIndex].classList.add("displaySlide");
        //after 5000ms we want to go to the next slide
        intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length -1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}