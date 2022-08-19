// dashboard classes import
import { DashboardFunc } from "./assets/js/dashboard/dashboard.js";
import { Theme } from "./assets/js/dashboard/themes.js";
// race classes import
import { Logic } from "./assets/js/race/logic.js";
import { ViewsFunc } from "./assets/js/views/index.js";
import { MoveFunc } from "./assets/js/race/move.js";
import { OthersFunc } from "./assets/js/race/others.js";

// dashboard
// ---------------- events ----------------
const elements = DashboardFunc.callElements();
const dashFunc = new DashboardFunc();

// hide panel on click of the hide panel button
elements.hideControl.addEventListener("click", (e) =>
  dashFunc.hideDashboard(e)
);
// mobile hide
elements.hideControlMobile.addEventListener("click", (e) =>
  dashFunc.hideDashboard(e)
);
// mobile hide back
elements.hideControlBack.addEventListener("click", (e) =>
  dashFunc.hideDashboard(e)
);
// cmake clickable the github link
const github = document.querySelector(".github");
github.addEventListener("click", () => {
  dashFunc.githubLink();
});

// theme
const theElement = document.getElementById("footer");
// get theme from local
window.addEventListener("DOMContentLoaded", () => {
  Theme.loadLocalTheme();
  Theme.bodyBackground();
  Theme.changeCarSkin();
  // Make the DIV element draggable:
  Theme.dragElement(theElement);
});
// add theme dynamically
Theme.getElements().theme1.addEventListener("click", (e) => {
  Theme.themeAnimation(e);
  Theme.loadTheme(e);
  Theme.bodyBackground();
  Theme.changeAnimationDivPositionOnDrag();
  Theme.changeCarSkin();
});
Theme.getElements().theme2.addEventListener("click", (e) => {
  Theme.themeAnimation(e);
  Theme.loadTheme(e);
  Theme.bodyBackground();
  Theme.changeAnimationDivPositionOnDrag();
  Theme.changeCarSkin();
});
Theme.getElements().theme3.addEventListener("click", (e) => {
  Theme.themeAnimation(e);
  Theme.loadTheme(e);
  Theme.bodyBackground();
  Theme.changeAnimationDivPositionOnDrag();
  Theme.changeCarSkin();
});

// LOGIC
// events
const elmts = Logic.getViewElements();
const logics = new Logic();
const views = new ViewsFunc();

// put start state to on when click on the start button
// START NEW RACE
elmts.normalStart.addEventListener("click", () => {
  views.startActions();
  logics.startState();
  views.loadBotCars();
});
elmts.youStart.addEventListener("click", () => {
  views.youActions();
  logics.startState();
  views.loadBotCars();
});
elmts.customStart.addEventListener("click", () => {
  if (OthersFunc.checkBeforeStartCustomRace()) {
    views.customActions();
  } else {
    OthersFunc.newNotification("Before start fill in the missing selections");
  }
  if (OthersFunc.checkBeforeStartCustomRace()) {
    logics.startState();
    views.loadBotCars();
  }
});

// end state evt when race is over
// end state evt when user leave the race
elmts.normalAction.addEventListener("click", logics.endState);
elmts.newStart.addEventListener("click", logics.endState);

elmts.youVsButton.addEventListener("click", logics.endState);
elmts.customButton.addEventListener("click", logics.endState);

// MOVE
const moveElements = MoveFunc.getElmts();
// initialize move functions class
const moveFunction = new MoveFunc();
// prevent form submition
document
  .querySelector("form")
  .addEventListener("submit", (e) => e.preventDefault());

// check for matches and move the car
moveElements.typeInput.addEventListener("input", (e) => {
  moveFunction.move(e);
});

// OTHERS
window.addEventListener("DOMContentLoaded", () => {
  views.loadYouVsView();
  OthersFunc.minutesCounter();
  OthersFunc.showWpmAndCpm();
});

document.querySelector(".choice-custom-race").addEventListener("click", (e) => {
  if (e.target.className === "add-new") {
    OthersFunc.addNewBot(e);
  }
  if (e.target.className === "delete-bot") {
    if (OthersFunc.checkForDeleteBot()) {
      e.target.parentElement.remove();
      OthersFunc.newNotification("Bot removed");
    } else {
      OthersFunc.newNotification("At leats one bot");
    }
  }
});

// VIEWS
// events
const elms = ViewsFunc.getViewElements();
// view event
// load normal view
elms.normalAction.addEventListener("click", views.loadNormalView);
// load you vs computer view
elms.youVsButton.addEventListener("click", views.loadYouVsView);
// load custom view
elms.customButton.addEventListener("click", views.loadCustomView);

// button "start new race"
elms.newStart.addEventListener("click", views.loadView);
