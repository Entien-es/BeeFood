const imgs = document.querySelectorAll(".container-s2 img");
imgs.forEach((item) => item.addEventListener("click", handleZoomImg));

function handleZoomImg(event) {
  const image = event.target.getAttribute("src");
  const template = `<div class="lightbox">
  <div class="lightbox-content">
  <i class="ti-angle-left lightbox-prev"></i>
      <img class="lightbox-img" src="${image}">
      <i class="ti-angle-right lightbox-next"></i>
      </div>
</div>`;
  document.body.insertAdjacentHTML("beforeend", template);
}

let index = 0;
document.body.addEventListener("click", function (e) {
  const lbImg = document.querySelector(".lightbox-img");
  let lbSrc = "";
  if (e.target.matches(".lightbox")) {
    e.target.parentNode.removeChild(e.target);
  } else if (e.target.matches(".lightbox-next")) {
    lbSrc = lbImg.getAttribute("src");
    index = [...imgs].findIndex((item) => item.getAttribute("src") === lbSrc);
    ++index;
    if (index > imgs.length - 1) {
      index = 0;
    };
    const newSrc = [...imgs][index].getAttribute("src");
    lbImg.setAttribute("src", newSrc);
  } else if (e.target.matches(".lightbox-prev")) {
    --index;
    if (index < 0) {
      index = imgs.length - 1;
    };
    const newSrc = [...imgs][index].getAttribute("src");
    lbImg.setAttribute("src", newSrc);
  }
});
