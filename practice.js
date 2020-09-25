const ham = document.querySelector(".hamburger");
const navlinks = document.querySelector(".Nav-links");
const box=document.querySelector(".firstBox");
const links = document.querySelectorAll(".Nav-links li");
const close = document.querySelector(".ul");

ham.addEventListener("click", () => {
  ham.classList.toggle("open");
  navlinks.classList.toggle("open");
  box.classList.toggle("close");
  var list;
  list = document.querySelectorAll(".line");
  for (var i = 0; i < list.length; ++i) {
    list[i].classList.toggle("open");
  }
});

close.addEventListener("click", () => {
  ham.classList.toggle("open");
  navlinks.classList.toggle("open");
  box.classList.toggle("close");
  var list;
  list = document.querySelectorAll(".line");
  for (var i = 0; i < list.length; ++i) {
    list[i].classList.toggle("open");
  }
});
