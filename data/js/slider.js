window.addEventListener("load", function () {
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItem = document.querySelectorAll(".slider-item");
    const nextSliderBtn = document.querySelector(".slider-next");
    const prevSliderBtn = document.querySelector(".slider-prev");
    const dotItem = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItem[0].offsetWidth;
    const slidesLength = sliderItem.length;
    console.log(sliderItemWidth);

});