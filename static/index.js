// var instantsearch = require("instantsearch.js");
import "./components/search";
import smoothscroll from "smoothscroll-polyfill";
import "./components/github";

require("intersection-observer");
smoothscroll.polyfill();

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  console.log(rect.top, rect.bottom, window.innerHeight);
  // the below calculates if the WHOLE element is in the viewport, we just need to know if it does in general
  if (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /*or $(window).width() */
  ) {
    return el;
  }
}

const fixedNav = document.querySelector(".fixed-nav");
var navBounds = fixedNav.getBoundingClientRect();
// simple function to use for callback in the intersection observer

// var viewportOffset = document.getBoundingClientRect();
// these are relative to the viewport
// var top = viewportOffset.top;
// var left = viewportOffset.left;

// console.log(viewportOffset);
// var last_known_scroll_position = 0;
// var ticking = false;

// function doSomething(scroll_pos) {
//   // Do something with the scroll position
// }

var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");

// window.addEventListener("scroll", function(e) {
//   var bRect = one.getBoundingClientRect();
//   let { top, bottom } = bRect;
//   if (navBounds.top > top && navBounds.bottom < bottom) {
//     console.log("SECOND SECTION????");
//   } else {
//     console.log("🙅‍");
//   }

//   // last_known_scroll_position = window.scrollY;
//   // console.log(last_known_scroll_position);
//   // console.log(rect.top, rect.right, rect.bottom, rect.left);
//   // console.log(bRect.top, bRect.right, bRect.bottom, bRect.left);

//   // if (!ticking) {
//   //   window.requestAnimationFrame(function() {
//   //     // doSomething(last_known_scroll_position);
//   //     ticking = false;
//   //   });

//   //   ticking = true;
//   // }

//   // bRect;
// });

// target the elements to be observed
const sections = document.querySelectorAll("section");

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

sections.forEach((i) => {
  observer.observe(i);
});

function onEntry(entries, observer) {
  entries.map((entry, index) => {
    // console.log(entry.intersectionRatio)
    let { top, bottom } = entry.boundingClientRect;
    // // todo: SOME COMBINATION OF THE TWO BELOW
    // // isIntersecting captures moment of entry into viewport, but does not accurately capture whether the fixedNav dimensions fit in the current scrolld section.
    // if (top < navBounds.top && bottom > navBounds.bottom) {
    // }
    if (entry.isIntersecting) {
      let toHighlight = document.querySelector(`[href="#${entry.target.id}"]`);
      let active = document.querySelector(".active");
      active && active.classList.remove("active");
      toHighlight.classList.add("active");
    }
  });
}

let sectionLinks = document.querySelectorAll(".scroll-nav__link");

let onClick = (e, i) => {
  e.preventDefault();
  let whereToScroll = document.querySelector(i.getAttribute("href"));
  whereToScroll = whereToScroll.getBoundingClientRect();
  window.scrollBy({ top: whereToScroll.top, left: 0, behavior: "smooth" });
};

sectionLinks.forEach((i) => {
  i.addEventListener("click", (e) => onClick(e, i));
});
