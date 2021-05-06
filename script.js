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
    autoAnimate();
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

function autoAnimate() {
    slideBox.style.transform = "translateX(-" + slideBoxWidth * currentSlide + "px)";

    if (currentSlide == 0) {
        navigationDotsBox.children[numberOfSlide - 1].classList.remove('active');
        navigationDotsBox.children[currentSlide].classList.add('active');
    } else {
        navigationDotsBox.children[currentSlide - 1].classList.remove('active');
        navigationDotsBox.children[currentSlide].classList.add('active');
    }

    if (currentSlide >= numberOfSlide - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }




    setTimeout("autoAnimate()", 3000);
}



// next button
nxtBtn.addEventListener('click', () => {
    if (currentSlide >= numberOfSlide - 1) {
        actionOfBtn(0);
        currentSlide = 0;
        actionOfNextDots(0);
        return;
    }

    currentSlide++;
    actionOfBtn(currentSlide);
    actionOfNextDots(currentSlide);
});

// previous button
prevBtn.addEventListener('click', () => {
    if (currentSlide <= 0) {
        actionOfBtn(numberOfSlide - 1);
        currentSlide = numberOfSlide - 1;
        actionOfPrevDots(currentSlide);
        return;
    }
    currentSlide--;
    actionOfBtn(currentSlide);
    actionOfPrevDots(currentSlide);
});

function actionOfBtn(i) {
    slideBox.style.transform = "translateX(-" + slideBoxWidth * i + "px)";
}

function actionOfNextDots(a) {
    if (a == 0) {
        navigationDotsBox.children[numberOfSlide - 1].classList.remove("active");
        navigationDotsBox.children[a].classList.add("active");
    } else {
        navigationDotsBox.children[a - 1].classList.remove("active");
        navigationDotsBox.children[a].classList.add("active");

    }

}

function actionOfPrevDots(a) {
    if (a == numberOfSlide - 1) {
        navigationDotsBox.children[0].classList.remove("active");
        navigationDotsBox.children[a].classList.add("active");
    } else {
        navigationDotsBox.children[a + 1].classList.remove("active");
        navigationDotsBox.children[a].classList.add("active");

    }

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
    console.log(topNewsCurrentSlide - 1);


    setTimeout("autoAnimateTopNewsSlide()", 4000);
}

topNewsSliderNextBtn.addEventListener('click', () => {
    if (topNewsCurrentSlide >= topNewsAllSlide.length - 1) {
        topNewsSlidesBox.style.transform = "translateX(-" + 100 * 0 + "%)";
        topNewsCurrentSlide = 0;
    } else {
        topNewsCurrentSlide++;
        console.log(topNewsCurrentSlide);
        topNewsSlidesBox.style.transform = "translateX(-" + 100 * topNewsCurrentSlide + "%)";


    }
});
topNewsSliderPrevBtn.addEventListener('click', () => {

    if (topNewsCurrentSlide == 0) {
        topNewsCurrentSlide = topNewsAllSlide.length;
    }
    topNewsCurrentSlide--;
    console.log(topNewsCurrentSlide);
    topNewsSlidesBox.style.transform = "translateX(-" + 100 * topNewsCurrentSlide + "%)";


});