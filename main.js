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
  loopTimer = setTimeout("frameLooper()", 150); /* change 70 for speed */
}
frameLooper();
