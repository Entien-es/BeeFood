const test = document.querySelectorAll("#footer a, button");
test.forEach((item) => item.addEventListener("click", messageComingSoon));

function messageComingSoon() {
    alert("Coming soon");
}

