import { OthersFunc, wpmList, go, wpm } from "../race/others.js";
import { MoveFunc } from "../race/move.js";
import { TextProcess, theText } from "../race/text_process.js";

export class Views {
  constructor(
    normalContainer,
    normalAction,
    normalStart,
    newStart,
    youVsButton,
    youVsContainer,
    customButton,
    customContainer,
    youStart,
    customStart
  ) {
    this.normalContainer = normalContainer;
    this.normalAction = normalAction;
    this.normalStart = normalStart;
    this.newStart = newStart;
    this.youVsButton = youVsButton;
    this.youVsContainer = youVsContainer;
    this.customButton = customButton;
    this.customContainer = customContainer;
    this.youStart = youStart;
    this.customStart = customStart;
  }
}

export let timeoutCounter;
export let timeoutApp;
export let currentView; // can be ("normal", "you", "custom") "normal"-for normal course "you"-for you vs course "custom" for custom race
let wpmDelay = 30;
export let customId;

// chart js
let chartInView;
export function modifyChartInView(value) {
  value = chartInView;
}

// functions
export class ViewsFunc {
  loadNormalView() {
    const elms = ViewsFunc.getViewElements();

    // disappear od all of the test elements
    document.querySelector(".test-element").style.display = "none";
    document.querySelector(".section-animation").style.display = "none";
    document.querySelector(".counterTimer").style.display = "none";
    elms.youVsContainer.style.display = "none";
    elms.customContainer.style.display = "none";

    // show normal view text
    elms.normalContainer.style.display = "flex";
  }
  loadYouVsView() {
    const elms = ViewsFunc.getViewElements();

    // disappear od all of the test elements
    document.querySelector(".test-element").style.display = "none";
    document.querySelector(".section-animation").style.display = "none";
    document.querySelector(".counterTimer").style.display = "none";
    elms.normalContainer.style.display = "none";
    elms.customContainer.style.display = "none";

    // show you vs comp view text
    elms.youVsContainer.style.display = "flex";
  }
  loadCustomView() {
    const elms = ViewsFunc.getViewElements();

    // disappear od all of the test elements
    document.querySelector(".test-element").style.display = "none";
    document.querySelector(".section-animation").style.display = "none";
    document.querySelector(".counterTimer").style.display = "none";
    elms.normalContainer.style.display = "none";
    elms.youVsContainer.style.display = "none";

    // show you vs comp view text
    elms.customContainer.style.display = "flex";
  }

  moveYouVsCompCar() {
    // give an id to the car
    let botCar = Array.from(document.querySelectorAll(".bot"))[0].children[1]
      .children[0];
    botCar.setAttribute("id", "youVs");
    // set the bot car width
    let botWidth = 0;

    console.log(theText, "cars");
    let wordCount = theText.split(" ").length;

    // give a random wpm
    wpmDelay = Math.round(Math.random() * 100);
    if (wpmDelay < 20) {
      wpmDelay = wpmDelay + 20;
    }

    // the math for give a random wpm to the bot with 30wpm as the wpm constant
    // and 10 words as the words count constant
    let randWpm = (1000 / (wpmDelay / 30)) * (wordCount / 10);

    let speed = setInterval(() => {
      if (botWidth > 100) {
        botCar.style.left = `100%`;
      }

      if (botWidth <= 100 && go === 1) {
        botWidth = botWidth + 5;
        // move the bot car
        botCar.style.left = `${botWidth}%`;
        // display bot wpm
        console.log(wpmDelay);
      }
    }, randWpm);
  }

  moveCustomCar() {
    // give an id to the car
    let botCar = Array.from(document.querySelectorAll(".bot"));
    let wordCount = MoveFunc.raceText().split(" ").length;
    let carsImgs = [];
    let speeds = [];
    let wpmDelay = [];

    // get and push the cars imgs
    botCar.forEach((car) => {
      carsImgs.push(car.children[1].children[0]);
    });
    // get and push cars speed
    OthersFunc.getCustomRaceInfo().forEach((info) => {
      speeds.push(info.speed);
    });
    // geting and pushing wpmDelay
    speeds.forEach((speed) => {
      let randWpm = (1000 / (speed / 30)) * (wordCount / 10);
      wpmDelay.push(randWpm);
    });
    // move the cars now
    let num = 0;

    function moveBots(img) {
      let botWidth = 0;
      let speed = setInterval(() => {
        if (botWidth > 100) {
          img.style.left = `100%`;
        }

        if (botWidth <= 100 && go === 1) {
          botWidth = botWidth + 5;
          // move the bot car
          img.style.left = `${botWidth}%`;
        }
      }, wpmDelay[num]);
    }

    carsImgs.forEach((move) => {
      customId = setTimeout(() => {
        moveBots(carsImgs[num]);
        num++;
      }, 1);
    });
  }

  showCustomBotWpmCpm() {
    // show wpm
    let wpmPlace = Array.from(document.querySelectorAll(".bot-wpm-and-cpm"));
    let i = 0;
    wpmPlace.forEach((item) => {
      item.children[0].innerText =
        OthersFunc.getCustomRaceInfo()[i].speed + " WPM";
      i++;
    });
    // show cpm
    let y = 0;
    wpmPlace.forEach((item) => {
      item.children[1].innerText =
        Math.round(OthersFunc.getCustomRaceInfo()[y].speed * 5.2) + " CPM";
      y++;
    });

    //show the names of the bots
    let botNames = Array.from(document.querySelectorAll(".you-name-bot"));
    let s = 0;
    botNames.forEach((item) => {
      item.children[0].innerText = OthersFunc.getCustomRaceInfo()[s].name;
      s++;
    });
  }

  showBotWpmCpm() {
    // show wpm
    document.querySelector(".bot-wpm-and-cpm").children[0].innerText =
      wpmDelay + " WPM";
    // show cpm with 5.2 as the average char per word
    document.querySelector(".bot-wpm-and-cpm").children[1].innerText =
      Math.round(wpmDelay * 5.2) + " CPM";
  }

  loadBotCars() {
    const views = new ViewsFunc();

    // remove bot car on the normal view
    if (currentView === "normal") {
      if (document.querySelector(".bot")) {
        Array.from(document.querySelectorAll(".bot")).forEach((bot) => {
          bot.remove();
        });
      }
    }
    // load one random bot car on you vs computer race
    if (currentView === "you") {
      // load the car
      MoveFunc.loadAutoCar();
      // move the car
      views.moveYouVsCompCar();
      // display bot Wpm and cpm
      views.showBotWpmCpm();
    }

    if (currentView === "custom") {
      // load the car
      OthersFunc.getCustomRaceInfo().forEach((item) => {
        MoveFunc.loadAutoCar();
      });

      // move the car
      views.moveCustomCar();
      // display bot Wpm and cpm
      views.showCustomBotWpmCpm();
    }
  }

  // leave the race button loader
  loadView() {
    const views = new ViewsFunc();

    if (currentView === "normal") {
      views.loadNormalView();
    }
    if (currentView === "you") {
      views.loadYouVsView();
    }
    if (currentView === "custom") {
      views.loadCustomView();
    }
  }

  startActions() {
    const elms = ViewsFunc.getViewElements();
    const delay = 2000;

    currentView = "normal";

    elms.normalContainer.style.display = "none";
    // load the loader
    ViewsFunc.loader(delay);

    // make the timer count start after the loader (have the same delay)
    timeoutCounter = setTimeout(() => {
      document.querySelector(".counterTimer").style.display = "block";
    }, delay);
  }

  youActions() {
    const elms = ViewsFunc.getViewElements();
    const delay = 2000;

    currentView = "you";

    elms.youVsContainer.style.display = "none";
    // load the loader
    ViewsFunc.loader(delay);

    // make the timer count start after the loader (have the same delay)
    timeoutCounter = setTimeout(() => {
      document.querySelector(".counterTimer").style.display = "block";
    }, delay);
  }

  customActions() {
    const elms = ViewsFunc.getViewElements();
    const delay = 2000;

    currentView = "custom";

    elms.customContainer.style.display = "none";
    // load the loader
    ViewsFunc.loader(delay);

    // make the timer count start after the loader (have the same delay)
    timeoutCounter = setTimeout(() => {
      document.querySelector(".counterTimer").style.display = "block";
    }, delay);
  }

  // helpers
  static getViewElements() {
    const getViewsElms = new Views(
      document.querySelector(".normal-race-view"),
      document.querySelector(".race-type-action-normal"),
      document.querySelector("#normal-start"),
      document.querySelector("#new-start"),
      document.querySelector(".race-type-action-comp"),
      document.querySelector(".you-vs-race-view"),
      document.querySelector(".race-type-action-custom"),
      document.querySelector(".custom-race-view"),
      document.querySelector("#you-start"),
      document.querySelector("#custom-start")
    );
    return getViewsElms;
  }

  static loader(delay) {
    document.querySelector(".section-animation").style.display = "flex";

    timeoutApp = setTimeout(() => {
      // make disapper of the loader
      document.querySelector(".section-animation").style.display = "none";
      // appearance of the app
      document.querySelector(".test-element").style.display = "block";
    }, delay);
  }

  static showResultUi() {
    // document.querySelector(".results").style.display = "grid";
    document.querySelector("#new-start").innerText = "Start New Race";
    document.querySelector("#new-start").style.margin = "1rem auto 35rem";
    document.querySelector("#new-start").style.display = "none";

    // show loader for 1sec
    document.querySelector(".loader-result").style.display = "flex";
    let hideloader = setTimeout(() => {
      document.querySelector(".loader-result").style.display = "none";

      document.querySelector(".results").style.display = "grid";
      document.querySelector("#new-start").style.display = "block";

      document
        .querySelector("#scoll-to")
        .scrollIntoView({ behavior: "smooth" });
    }, 1000);
  }

  static hideResultUi() {
    document.querySelector(".results").style.display = "none";
    document.querySelector("#new-start").innerText = "Leave The Race";
    document.querySelector("#new-start").style.margin = "1rem auto 0";
  }

  static showNotification() {
    if (currentView === "normal") {
      OthersFunc.newNotification("Finish");
    }
    if (currentView != "normal") {
      ViewsFunc.whoWins();
    }
  }

  static whoWins() {
    if (currentView === "you") {
      if (wpm > wpmDelay) {
        OthersFunc.newNotification("You Win");
      }
      if (wpm < wpmDelay) {
        OthersFunc.newNotification("You Lose");
      }
      if (wpm === wpmDelay) {
        OthersFunc.newNotification("Match null");
      }
    }

    if (currentView === "custom") {
      let data = OthersFunc.getCustomRaceInfo();
      let place = 1;

      data.forEach((dot) => {
        if (dot.speed > wpm) {
          place++;
        }
      });
      OthersFunc.newNotification(`You finish at ${place} place`);
    }
  }

  // chart
  static chartFunc() {
    let chartAction = setInterval(() => {
      if (go === 0) {
        let chartData = OthersFunc.calculateChartData();
        let dataForChart = [];
        chartData.forEach((data) => {
          dataForChart.push(`${data} wpm`);
        });

        let wpmData = chartData;
        const labels = dataForChart;

        const data = {
          labels: labels,
          datasets: [
            {
              backgroundColor: "rgba(155, 155, 155, 0.221)",
              borderColor: "#fff",
              color: "#fff",
              fill: true,
              data: wpmData,
              lineTension: 0.4,
            },
          ],
        };

        const config = {
          type: "line",
          data: data,
          options: {
            animation: {
              duration: 0,
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  color: "#fff",
                  font: {
                    family: "alataregular",
                  },
                },
              },
              x: {
                ticks: {
                  color: "#fff",
                  font: {
                    family: "alataregular",
                  },
                },
              },
            },
          },
        };

        const myChart = new Chart(document.getElementById("chart"), config);

        chartInView = 1;
      }
      if (chartInView === 1) {
        clearInterval(chartAction);
      }
    }, 1000);
  }
}

// events
const elms = ViewsFunc.getViewElements();
const views = new ViewsFunc();

// load the normal app per default
window.addEventListener("DOMContentLoaded", () => {
  views.loadYouVsView();
});
// view event
// load normal view
elms.normalAction.addEventListener("click", views.loadNormalView);

elms.normalStart.addEventListener("click", () => {
  views.startActions();
}); // start normal race
// load you vs computer view
elms.youVsButton.addEventListener("click", views.loadYouVsView);
elms.youStart.addEventListener("click", () => {
  views.youActions();
}); // start you vs race
// load custom view
elms.customButton.addEventListener("click", views.loadCustomView);
elms.customStart.addEventListener("click", () => {
  if (OthersFunc.checkBeforeStartCustomRace()) {
    views.customActions();
  } else {
    OthersFunc.newNotification("Before start fill in the missing selections");
  }
}); // start you vs race

// button "start new race"
elms.newStart.addEventListener("click", views.loadView);
