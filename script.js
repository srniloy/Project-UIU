const slideWrapper = document.querySelector('.home-slide-wrapper');
const slideBox = document.querySelector('.home-slide-box');
const slides = document.querySelectorAll('.home-slide-all');
const nxtBtn = document.querySelector('.home-slider-next-btn');
const prevBtn = document.querySelector('.home-slider-prev-btn');
const navigationDotsBox = document.querySelector('.home-slider-navigation-dots');

let slideBoxWidth = slideBox.offsetWidth;
let numberOfSlide = slides.length;
let currentSlide = 0;

function init() {
    slides.forEach((slides, i) => {
        slides.style.left = i * 100 + "%";
    });
    createNavigationDots();
}
init();

function createNavigationDots() {
    for (let i = 0; i < numberOfSlide; i++) {
        const dots = document.createElement("div");
        dots.classList.add("dot");
        navigationDotsBox.appendChild(dots);
    }
    navigationDotsBox.children[0].classList.add('active');
}

// Action of Next Button
nxtBtn.addEventListener('click',() => {
    nextSlide();
    resetTimerOfHomeSlider();
});

function nextSlide(){
    if(currentSlide == numberOfSlide-1){
        currentSlide = 0;
    }else{
        currentSlide++;
    }
    changeSlide();
}

// Action of previous button
prevBtn.addEventListener('click',()=> {
    prevSlide();
    resetTimerOfHomeSlider();
});

function prevSlide(){
    if(currentSlide == 0){
        currentSlide = numberOfSlide-1;
    }
    else{
        currentSlide--;
    }
    changeSlide();
}

function changeSlide(){
    for(let i=0;i<numberOfSlide;i++){
        navigationDotsBox.children[i].classList.remove('active');
    }
    navigationDotsBox.children[currentSlide].classList.add('active');
    slideBox.style.transform = "translateX(-"+ slideBoxWidth * currentSlide + "px)";
    console.log(currentSlide * slideBoxWidth);
}


// auto changing slider
function autoChangeSlide(){
    nextSlide();

}
let timerOfHomeSlider = setInterval(autoChangeSlide,4000);

function resetTimerOfHomeSlider(){
    clearInterval(timerOfHomeSlider);
    timerOfHomeSlider = setInterval(autoChangeSlide,4000);
}



slideWrapper.addEventListener('mouseover', () => {
    nxtBtn.style.zIndex = 100;
    prevBtn.style.zIndex = 100;
});
slideWrapper.addEventListener('mouseout', () => {
    nxtBtn.style.zIndex = -5;
    prevBtn.style.zIndex = -6;
});











// ==============Top news slider====================

const topNewsSlidesBox = document.querySelector('.top-news-slides-innerDiv');
const topNewsAllSlide = document.querySelectorAll('.top-news-slides-common');
const topNewsSliderPrevBtn = document.querySelector('.top-news-slider-prev-btn');
const topNewsSliderNextBtn = document.querySelector('.top-news-slider-next-btn');

let topNewsCurrentSlide = 0;
let topNewsCurrentSlideForBtn = 0;

function setLeftOfTopNewsSlides() {
    for (let i = 0; i < topNewsAllSlide.length; i++) {
        topNewsAllSlide[i].style.left = (i * 100) + "%";
    }


}
setLeftOfTopNewsSlides();
autoAnimateTopNewsSlide();


function autoAnimateTopNewsSlide() {
    if (topNewsCurrentSlide >= topNewsAllSlide.length) {
        topNewsCurrentSlide = 0;
    }
    topNewsCurrentSlide++;
    topNewsSlidesBox.style.transform = "translateX(-" + 100 * (topNewsCurrentSlide - 1) + "%)";
    


    setTimeout("autoAnimateTopNewsSlide()", 4000);
}

topNewsSliderNextBtn.addEventListener('click', () => {
    if (topNewsCurrentSlide >= topNewsAllSlide.length - 1) {
        topNewsSlidesBox.style.transform = "translateX(-" + 100 * 0 + "%)";
        topNewsCurrentSlide = 0;
    } else {
        topNewsCurrentSlide++;
        topNewsSlidesBox.style.transform = "translateX(-" + 100 * topNewsCurrentSlide + "%)";


    }
});
topNewsSliderPrevBtn.addEventListener('click', () => {

    if (topNewsCurrentSlide == 0) {
        topNewsCurrentSlide = topNewsAllSlide.length;
    }
    topNewsCurrentSlide--;
    topNewsSlidesBox.style.transform = "translateX(-" + 100 * topNewsCurrentSlide + "%)";


});