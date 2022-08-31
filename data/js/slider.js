window.addEventListener("load", function () {
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItem = document.querySelectorAll(".slider-item");
    const nextSliderBtn = document.querySelector(".slider-next");
    const prevSliderBtn = document.querySelector(".slider-prev");
    const dotItem = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItem[0].offsetWidth;
    const slidesLength = sliderItem.length;

    let posX = 0;
    let index = 0;
    nextSliderBtn.addEventListener("click", function() {
        changeSlides(1);
    });
    prevSliderBtn.addEventListener("click", function() {
        changeSlides(-1);
    });
    function changeSlides(direction) {
        if (direction === 1) {
            if (index >= slidesLength - 1)
                return;
            posX -= sliderItemWidth;
            sliderMain.style = `transform: translateX(${posX}px)`;
            index++;
            console.log(index);
        } else if (direction === -1) {
            index--;
            if (index < 0) {
                index = 0;
                return;
            }
            posX += sliderItemWidth;
            sliderMain.style = `transform: translateX(${posX}px)`;
            console.log(index);
        }
    }


});