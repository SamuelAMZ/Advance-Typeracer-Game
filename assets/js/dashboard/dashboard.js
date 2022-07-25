// ---------------- class ----------------

class Dashboard {
  constructor(
    hideControl,
    container,
    main,
    hideControlMobile,
    elements,
    hideControlBack,
    raceType,
    test
  ) {
    this.hideControl = hideControl;
    this.container = container;
    this.main = main;
    this.hideControlMobile = hideControlMobile;
    this.elements = elements;
    this.hideControlBack = hideControlBack;
    this.raceType = raceType;
    this.test = test;
  }
}

// ---------------- functions -----------------

class DashboardFunc {
  // events functions ----------------
  // hide panel
  hideDashboard(e) {
    // desktop
    if (
      e.target.classList.contains("dt") ||
      e.target.classList.contains("hide-controls-panel")
    ) {
      DashboardFunc.callElements().main.classList.toggle("hide-container-dt");
      DashboardFunc.callElements().container.classList.toggle(
        "hide-container-padding-dt"
      );
    }

    let w = document.documentElement.clientWidth || window.innerWidth;

    // 1050
    if (w <= 1050 && w >= 850) {
      if (DashboardFunc.callElements().container.style.width !== "30%") {
        DashboardFunc.callElements().container.style.width = "30%";
        DashboardFunc.callElements().container.style.padding = "1rem";
        Array.from(DashboardFunc.callElements().raceType).forEach((item) => {
          item.style.width = "100%";
        });
        DashboardFunc.callElements().elements.style.display = "none";
        DashboardFunc.callElements().hideControlMobile.style.left = "30%";
      } else {
        DashboardFunc.callElements().container.style.width = "0%";
        DashboardFunc.callElements().container.style.padding = "0rem";
        Array.from(DashboardFunc.callElements().raceType).forEach((item) => {
          item.style.width = "100%";
        });
        DashboardFunc.callElements().elements.style.display = "none";
        DashboardFunc.callElements().hideControlMobile.style.left = "0%";
      }
    }

    // tablet
    if (w <= 850) {
      if (DashboardFunc.callElements().container.style.width !== "60%") {
        DashboardFunc.callElements().container.style.width = "60%";
        DashboardFunc.callElements().container.style.padding = "1rem";
        Array.from(DashboardFunc.callElements().raceType).forEach((item) => {
          item.style.width = "100%";
        });
        DashboardFunc.callElements().elements.style.display = "none";
        DashboardFunc.callElements().hideControlMobile.style.left = "60%";
      } else {
        DashboardFunc.callElements().container.style.width = "0%";
        DashboardFunc.callElements().container.style.padding = "0rem";
        Array.from(DashboardFunc.callElements().raceType).forEach((item) => {
          item.style.width = "100%";
        });
        DashboardFunc.callElements().elements.style.display = "none";
        DashboardFunc.callElements().hideControlMobile.style.left = "0%";
      }
    }
  }

  // helpers ----------------
  static callElements() {
    const dash = new Dashboard(
      document.querySelector(".hide-controls-panel"),
      document.querySelector(".container"),
      document.querySelector("main"),
      document.querySelector(".hide-controls-panel-mb"),
      document.querySelector(".elements"),
      document.querySelector(".hide-controls-panel-bc"),
      document.querySelectorAll(".race-type"),
      document.querySelector(".test")
    );

    return dash;
  }
}

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
