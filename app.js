//Off-Canvas Menu
const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const contentEl = document.querySelector("header");
const hamburgerBarsEl = document.getElementsByTagName("span");

function toggleNav() {
      navTriggerEl.addEventListener("click", function() {
              navEl.classList.toggle("open");
              contentEl.classList.toggle("shift");
              animateHamburgers();
            });
}

function animateHamburgers() {
      for (let item of hamburgerBarsEl) {
              item.classList.toggle("change");
            }
}

toggleNav();

//Typewriter
var typed3 = new Typed('#typewriter', {
     strings: ["Hi Im Andres.", "Im a Developer.", "Im a Creator.", "Im...", "a Super Hero!!."],
     typeSpeed:100,
    backSpeed: 50,
     smartBackspace: true,
   loop: true
  });