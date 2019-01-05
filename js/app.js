// FUNKCJONALNOŚCI

var blockOne = document.querySelector(".chairs-clair .chairs-box-text");
var blockTwo = document.querySelector(".chairs-margarita .chairs-box-text");
var textOne = document.querySelector(".chairs-clair h3");
var textTwo = document.querySelector(".chairs-margarita h3");
var boxClair = document.querySelector(".chairs-clair");
var boxMargarita = document.querySelector(".chairs-margarita");

boxClair.addEventListener("mouseenter", function () {

    blockOne.classList.add("hidden");
    textOne.classList.add("hidden");
});

boxClair.addEventListener("mouseout", function () {

    blockOne.classList.remove("hidden");
    textOne.classList.remove("hidden");
});

boxMargarita.addEventListener("mouseenter", function () {

    blockTwo.classList.add("hidden");
    textTwo.classList.add("hidden");
});

boxMargarita.addEventListener("mouseout", function () {

    blockTwo.classList.remove("hidden");
    textTwo.classList.remove("hidden");
});

// SLIDER

var bannerPrev = document.querySelector(".banner-prev");
var bannerNext = document.querySelector(".banner-next");
var imageList = document.querySelectorAll(".slider li");

var index = 0;

bannerNext.addEventListener("click", function () {

    imageList[index].classList.remove("visible");

    if (index >= imageList.length-1) {
        index = 0;
    }
    else {
        index++;
    }
    imageList[index].classList.add("visible");
});

bannerPrev.addEventListener("click", function () {

    imageList[index].classList.remove("visible");

    if (index === 0) {
        index = imageList.length -1;
    }
    else {
        index--;
    }
    imageList[index].classList.add("visible");
});



