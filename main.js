let scrollPosition = window.pageYOffset;
const menuHeight = 50;
const documentBody = (document.scrollingElement || document.documentElement || document.body.parentNode || document.body);

const anchors = document.querySelectorAll(".main-menu-items-inside");
anchors.forEach(anchor => anchor.addEventListener('click', preventJump));


function preventJump(event) {
event.preventDefault();
const hash = this.getAttribute("href");

if (history.pushState) {
  history.pushState(null, null, hash);
} else {
  location.hash = hash;
}

this.blur();

const difference = Math.abs(document.querySelector(hash).offsetTop - window.pageYOffset);
const duration = difference / 2;

const elementPosition = document.querySelector(hash).offsetTop;
smoothScroll(elementPosition, duration, menuHeight);
}

function smoothScroll(scrollTo, duration, fixedHeight) {
if (duration <= 0) {
  if (scrollTo == window.pageYOffset) {
    return;
  } else {
    documentBody.scrollTop = scrollTo - fixedHeight;
    return;
  }
}
let scrollFrom = window.pageYOffset;
let difference = scrollTo - scrollFrom - fixedHeight;
let perTick = difference / duration * 10;

setTimeout(function() {
  documentBody.scrollTop = documentBody.scrollTop + perTick;
  smoothScroll(scrollTo, duration - 10, fixedHeight);
}, 10);
}


function menu_hover() {
      document.getElementsByClassName("main-menu").setAttribute("class", "menu_hover");
}
function menu_hover() {
    document.getElementsByClassName("main-menu").removeAttribute("class");
}










//
