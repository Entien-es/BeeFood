const test = document.querySelectorAll(
  "#footer a,#footer button, #Download a, #Download button, #sec1 button"
);
test.forEach((item) => item.addEventListener("click", messageComingSoon));

function messageComingSoon() {
  alert("Coming soon");
}
