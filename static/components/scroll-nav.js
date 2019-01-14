// import smoothscroll from "smoothscroll-polyfill";
smoothscroll = require("smoothscroll-polyfill");
require("intersection-observer");

smoothscroll.polyfill();

// Navigation section highlight functionality
var options = {
  root: null,
  // base container that your observer will be based on
  // default is viewport
  // rootMargin: "5px",
  // offset
  // rootMargin: "5px 2px 0px 100px"
  // threshold: [1.0]
  // or
  threshold: [0.5]
  // think in percentages (25%, 50%, 75%, 100%)
};

var observer = new IntersectionObserver(onEntry, options);

const sections = document.querySelectorAll("section");
sections.forEach((i) => {
  observer.observe(i);
});

function onEntry(entries, observer) {
  entries.map((entry, index) => {
    if (entry.isIntersecting) {
      const toHighlight = document.querySelector(`[href="#${entry.target.id}"]`);
      const active = document.querySelector(".active");
      active && active.classList.remove("active");
      toHighlight.classList.add("active");
    }
  });
}

// Scroll-to-Section functionality

const sectionLinks = document.querySelectorAll(".scroll-nav__link");

const onClick = (e, i) => {
  e.preventDefault();
  let whereToScroll = document.querySelector(i.getAttribute("href"));
  whereToScroll = whereToScroll.getBoundingClientRect();
  window.scrollBy({
    top: whereToScroll.top,
    left: 0,
    behavior: "smooth"
  });
};

sectionLinks.forEach((i) => {
  i.addEventListener("click", (e) => onClick(e, i));
});
