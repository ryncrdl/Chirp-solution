const nav = document.querySelector("nav");
const navbtn = document.querySelector(".nav-button");
navbtn.onclick = () => {
  nav.classList.toggle("show");
};

const media_query_small = window.matchMedia("(max-width: 635px)");

const responsive_padding = () => {
  const header = document.querySelector("header");
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    header.style.boxShadow = "0rem 0rem 0.5rem -0.2rem  #000000";
    if (media_query_small.matches) {
      header.style.padding = "0.5rem 0rem";
    } else {
      header.style.padding = "1rem 0rem";
    }
  } else {
    header.style.boxShadow = "none";
    if (media_query_small.matches) {
      header.style.padding = "2rem 0rem";
    } else {
      header.style.padding = "3rem 0rem";
    }
  }
};

window.onscroll = () => {
  responsive_padding();
};
window.onload = () => {
  responsive_padding();
};

window.scrollBy(0, 10);
window.scrollBy(0, -10);
