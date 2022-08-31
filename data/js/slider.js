window.addEventListener("load", function () {
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItem = document.querySelectorAll(".slider-item");
    const nextSliderBtn = document.querySelector(".slider-next");
    const prevSliderBtn = document.querySelector(".slider-prev");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    const sliderItemWidth = sliderItem[0].offsetWidth;
    const slidesLength = sliderItem.length;

    let posX = 0;
    let index = 0;

    [...dotItems].forEach((item) => item.addEventListener("click", function (e) {
        [...dotItems].forEach((re) => re.classList.remove("activeSlide"))
            e.target.classList.add("activeSlide");
            const dotIdex = parseInt(e.target.dataset.index);
            index = dotIdex;
            posX = -index * sliderItemWidth;
            sliderMain.style = `transform: translateX(${posX}px)`;
        
        })
    );
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
        } else if (direction === -1) {
            index--;
            if (index < 0) {
                index = 0;
                return;
            }
            posX += sliderItemWidth;
            sliderMain.style = `transform: translateX(${posX}px)`;
        }
        [...dotItems].forEach((re) => re.classList.remove("activeSlide"))
        dotItems[index].classList.add("activeSlide");
    }
});