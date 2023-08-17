// SHOW MENU

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav_toggle", "nav_menu");

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll(".nav_link");
navLink.forEach((n) => n.classList.remove("active"));

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

AOS.init({
  duration: 1200,
  once: false,
  mirror: true,
});

var string = "Parivalavan"; /* type your text here */
var array = string.split("");
var timer;

function frameLooper() {
  if (array.length > 0) {
    document.getElementById("element").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
  }
  loopTimer = setTimeout("frameLooper()", 500); /* change 70 for speed */
}
frameLooper();
//vanta js library
VANTA.NET({
  el: "#home",
  mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 0.5,
  points: 10.0,
  maxDistance: 15.0,
  spacing: 15.0,
  color: 0xa0f1ea,
  backgroundColor: 0x2d2d2d,
});
VANTA.DOTS({
  el: "#skills",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xa0f1ea,
  color2: 0x2d2d2d,
  backgroundColor:0x2d2d2d
});
VANTA.DOTS({
  el: "#services",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xa0f1ea,
  color2: 0x2d2d2d,
  backgroundColor: 0x2d2d2d,
});
VANTA.DOTS({
  el: "#contact",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xa0f1ea,
  color2: 0x2d2d2d,
  backgroundColor: 0x2d2d2d,
});
VANTA.DOTS({
  el: "#work",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xa0f1ea,
  color2: 0x2d2d2d,
  backgroundColor: 0x2d2d2d,
});
VANTA.TRUNK({
  el: "#footer",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xa0f1ea,
  backgroundColor: 0x2d2d2d,
});