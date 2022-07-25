const body = document.querySelector("body");
const theme1 = document.querySelector(".theme1");
const theme2 = document.querySelector(".theme2");
const theme3 = document.querySelector(".theme3");
const themeAnim = document.querySelector(".theme-animation");
const drag = document.querySelector(".drag");
const themes = document.querySelector("#footer");

// ----------- give the themes on clicks with the animation START ------------

function loadTheme(e) {
  if (e.target.classList.contains("theme1")) {
    body.classList = "";
    body.classList.add("theme-1");
    // localstorage
    localStorage.setItem("theme", "theme-1");

    setTimeout(() => {
      localStorage.setItem("prevTheme", "#0c2852");
    }, 10);
  }
  if (e.target.classList.contains("theme2")) {
    body.classList = "";
    body.classList.add("theme-2");
    // localstorage
    localStorage.setItem("theme", "theme-2");

    setTimeout(() => {
      localStorage.setItem("prevTheme", "#212121");
    }, 10);
  }
  if (e.target.classList.contains("theme3")) {
    body.classList = "";
    body.classList.add("theme-3");
    // localstorage
    localStorage.setItem("theme", "theme-3");

    setTimeout(() => {
      localStorage.setItem("prevTheme", "#4b2243");
    }, 10);
  }
}

function loadLocalTheme() {
  let currentTheme = localStorage.getItem("theme");

  body.classList = "";
  body.classList.add(currentTheme);
}

function themeAnimation(e) {
  const animationDiv = document.querySelector(".animation");
  // empty animation div per click
  animationDiv.innerHTML = "";

  // create theme anime at each click
  let themeA = document.createElement("div");
  themeA.classList.add("theme-animation");

  animationDiv.appendChild(themeA);

  setTimeout(() => {
    themeA.classList.add("active");
  }, 1);
}

// set new background color to body
function bodyBackground() {
  const prevTheme = localStorage.getItem("prevTheme");
  body.style.backgroundColor = prevTheme;
}

function changeAnimationDivPositionOnDrag() {
  let left = themes.style.left;
  let top = themes.style.top;

  document.querySelector(".theme-animation").style.left = left;
  document.querySelector(".theme-animation").style.top = top;
}

// ----------- give the themes on clicks with the animation END ------------

// ----------- move the theme selector div START ------------
// Make the DIV element draggable:
dragElement(document.getElementById("footer"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
// chnage car skin and input color depend on the theme
function changeCarSkin() {
  let car = document.querySelector("#you-car");
  let currentTheme = localStorage.getItem("theme");

  if (currentTheme === "theme-3") {
    car.src = "assets/imgs/car2.svg";
  } else {
    car.src = "assets/imgs/car.svg";
  }

  // if (currentTheme === "theme-2") {
  //   document.querySelector("#type-input").style.color = "black";
  // } else {
  //   document.querySelector("#type-input").style.color = "var(--bk-white)";
  // }
}

// ----------- move the theme selector div END ------------

// get theme from local
window.addEventListener("DOMContentLoaded", () => {
  loadLocalTheme();
  bodyBackground();
  changeCarSkin();
});
// add theme dynamically
theme1.addEventListener("click", (e) => {
  themeAnimation(e);
  loadTheme(e);
  bodyBackground();
  changeAnimationDivPositionOnDrag();
  changeCarSkin();
});
theme2.addEventListener("click", (e) => {
  themeAnimation(e);
  loadTheme(e);
  bodyBackground();
  changeAnimationDivPositionOnDrag();
  changeCarSkin();
});
theme3.addEventListener("click", (e) => {
  themeAnimation(e);
  loadTheme(e);
  bodyBackground();
  changeAnimationDivPositionOnDrag();
  changeCarSkin();
});
