let scrollIcon = document.querySelector("i.fa-solid.fa-arrow-up");
let navSv = document.querySelector("nav");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    scrollIcon.classList.add("show");
  } else {
    scrollIcon.classList.remove("show");
  }
  if (window.scrollY >= 100) {
    navSv.style.backgroundColor = "#212832";
  } else {
    navSv.style.backgroundColor = "transparent";
  }
};
scrollIcon.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
