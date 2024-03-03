let slide = document.getElementsByClassName('slide');
let currentSlideIndex = 0;
function nextSlide() {
    if(currentSlideIndex < slide.length - 1) {
        slide[currentSlideIndex].style.left = 15 + '%';
        slide[currentSlideIndex].style.width = 30 - [currentSlideIndex] * 2 +  '%';
        currentSlideIndex++;
        slide[currentSlideIndex].style.left = 50 + '%';
        slide[currentSlideIndex].style.width = 80 + '%';
    } else if (currentSlideIndex = slide.length - 1) {
        slide[currentSlideIndex].style.left = 15 + '%';
        slide[currentSlideIndex].style.width = 30 - [currentSlideIndex] * 3.5 + '%';
        
        currentSlideIndex = 0;
        slide[currentSlideIndex].style.left = 50 + '%';
        slide[currentSlideIndex].style.width = 80 + '%';
    }
}


