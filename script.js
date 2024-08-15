const nav = document.getElementById('navigation');
const burger = document.getElementById('burger-Bar');

burger.addEventListener("click", function () {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
});
