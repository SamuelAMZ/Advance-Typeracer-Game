import { Restrictions } from "./validation.js";
import { word, char, mistakes } from "./move.js";

export class Others {
  constructor(counterTimer) {
    this.counterTimer = counterTimer;
  }
}

// set globaly the interval ID of the setInteval to be able to clear it in other files
export let interval;
export let go;
// due to  the immutable exported module values that is causing issues when modifying go value in other files
export function modifyGo(value) {
  go = value;
}
let minutes = 0;
export function modifyMinutes(value) {
  minutes = value;
}
export let wpm = 0;
let cpm = 0;
let accuracy = 0;
export let wpmList = [];
export function modifyWpmList(value) {
  wpmList.length = value;
}
export let indexRem;

// functions
export class OthersFunc {
  // make the counter of 10seconds
  counterTimer(startTime) {
    let elms = OthersFunc.getElms();
    // initialize Restrictions
    const restrictions = new Restrictions();

    interval = setInterval(() => {
      startTime--;

      if (elms.counterTimer.style.display === "block") {
        if (startTime > 0) {
          elms.counterTimer.innerText = `Start in ${startTime}s`;
        }
        if (startTime === 0) {
          elms.counterTimer.innerText = `GO !!!`;
          go = 1;
        }
        if (startTime < 0) {
          // remove the timer div 1sec after showing the GO
          elms.counterTimer.style.display = "none";
          // clear interval
          clearInterval(interval);
        }
      }

      // input restriction regarding the timer
      restrictions.inputValideAfterTheGo(go);
    }, 1000);
  }
  // show result and the graph
  showResult() {
    wpm = word / (minutes / 60);
    document.querySelector(".rw").innerText = wpm.toFixed(2);
    cpm = char / (minutes / 60);
    document.querySelector(".rc").innerText = cpm.toFixed(2);
    document.querySelector(".rn").innerText = word;
    // accuracy math
    accuracy = 100 - (mistakes * 100) / char;

    if (accuracy < 0) {
      accuracy = 0;
    }

    document.querySelector(".ra").innerText = accuracy.toFixed(2) + "%";
    // mistakes
    document.querySelector(".rm").innerText = mistakes;
    // time takes
    document.querySelector(".tc").innerText =
      document.querySelector(".time-taked p").innerText;
  }

  static calculateChartData() {
    // 1 and 5 data
    let one = wpmList[1];
    let five = wpmList[wpmList.length - 1];
    // 3 data
    let three = wpmList[Math.round((wpmList.length - 1) / 2)];
    // 2 and 4 data
    let two = wpmList[Math.round(wpmList.indexOf(three) / 2)];
    let four =
      wpmList[Math.round((wpmList.indexOf(three) + (wpmList.length - 1)) / 2)];

    return [one, two, three, four, five];
  }

  //   helpers
  static getElms() {
    const getElms = new Others(document.querySelector(".counterTimer"));

    return getElms;
  }

  static minutesCounter() {
    // having the minutes
    setInterval(() => {
      if (go === 1) {
        minutes++;
      }
    }, 1000);
  }

  static showWpmAndCpm() {
    setInterval(() => {
      if (go === 1) {
        console.log(minutes);
        let min = Math.floor(minutes / 60);
        let sec = minutes % 60;
        if (sec < 10) {
          document.querySelector(".time-taked p").innerText =
            "0" + min + ":" + "0" + sec;
        } else {
          document.querySelector(".time-taked p").innerText =
            "0" + min + ":" + sec;
        }

        // wpm
        wpm = Math.round(word / (minutes / 60));
        // fill the wpm list
        wpmList.push(wpm);
        document.getElementById("wpm").innerText = `${wpm} WPM`;
        // cpm
        cpm = Math.round(char / (minutes / 60));
        document.getElementById("cpm").innerText = `${cpm} CPM`;
      }
    }, 1000);
  }

  // add new bot from custom race
  static addNewBot(e) {
    let botNameArr = [
      {
        name: "Choose A Bot Name",
        value: "choose",
      },
      {
        name: "Sam",
        value: "sam",
      },
      {
        name: "Mr Robot",
        value: "robot",
      },
      {
        name: "Rick Grimes",
        value: "grimes",
      },
      {
        name: "James",
        value: "james",
      },
    ];

    let botSpeedArr = [
      {
        name: "Choose A Bot Speed",
        value: "choose",
      },
      {
        name: "20 WPM",
        value: "20",
      },
      {
        name: "30 WPM",
        value: "30",
      },
      {
        name: "40 WPM",
        value: "40",
      },
      {
        name: "50 WPM",
        value: "50",
      },
      {
        name: "60 WPM",
        value: "60",
      },
      {
        name: "70 WPM",
        value: "70",
      },
      {
        name: "80 WPM",
        value: "80",
      },
      {
        name: "90 WPM",
        value: "90",
      },
      {
        name: "100 WPM",
        value: "100",
      },
      {
        name: "200 WPM",
        value: "200",
      },
      {
        name: "300 WPM",
        value: "300",
      },
      {
        name: "400 WPM",
        value: "400",
      },
      {
        name: "500 WPM",
        value: "500",
      },
    ];

    // create bot name select
    let botNameSelect = document.createElement("select");
    botNameSelect.setAttribute("id", "bot-name");
    botNameArr.forEach((item) => {
      let option = document.createElement("option");
      option.setAttribute("value", item.value);
      option.innerText = item.name;

      botNameSelect.appendChild(option);
    });
    // create bot speed select
    let botSpeedSelect = document.createElement("select");
    botSpeedSelect.setAttribute("id", "bot-speed");
    botSpeedArr.forEach((item) => {
      let option = document.createElement("option");
      option.setAttribute("value", item.value);
      option.innerText = item.name;

      botSpeedSelect.appendChild(option);
    });
    // create add bot button
    let botAdd = document.createElement("button");
    botAdd.classList.add("add-new");
    botAdd.innerText = "Add Bot";
    // create the delect button
    let delectBot = document.createElement("button");
    delectBot.classList.add("delete-bot");
    let deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fa-solid fa-xmark");
    delectBot.appendChild(deleteIcon);

    let botParent = document.createElement("div");
    botParent.classList.add("a-bot");
    botParent.appendChild(botNameSelect);
    botParent.appendChild(botSpeedSelect);
    botParent.appendChild(botAdd);
    botParent.appendChild(delectBot);

    let botParentParent = document.querySelector(".choice-custom-race");

    let numberOfBot = Array.from(document.querySelectorAll(".a-bot"));
    if (numberOfBot.length >= 3) {
      OthersFunc.newNotification("Not more than 3 bots per race");
      return;
    }

    if (OthersFunc.checkforBotNameAndSpeed(e)) {
      botParentParent.appendChild(botParent);
    } else {
      OthersFunc.newNotification("Fill in the selections");
    }
  }

  static checkforBotNameAndSpeed(e) {
    let statut = null;

    if (
      e.target.parentElement.children[0].value != "choose" &&
      e.target.parentElement.children[1].value != "choose"
    ) {
      statut = true;
    } else {
      statut = false;
    }

    return statut;
  }

  static checkForDeleteBot() {
    let statut = null;
    let numberOfBot = Array.from(document.querySelectorAll(".a-bot"));

    if (numberOfBot.length <= 1) {
      statut = false;
    }
    if (numberOfBot.length > 1) {
      statut = true;
    }

    return statut;
  }

  static checkBeforeStartCustomRace() {
    let numberOfBot = Array.from(document.querySelectorAll(".a-bot"));
    let check = [0];

    numberOfBot.forEach((child) => {
      if (child.children[0].value === "choose") {
        check.push(1);
      }
      if (child.children[1].value === "choose") {
        check.push(1);
      }
    });

    let value = check.reduce((acc, item) => {
      return acc + item;
    }, 0);

    if (value > 0) {
      return false;
    } else {
      return true;
    }
  }

  static getCustomRaceInfo() {
    let info = [];

    let numberOfBot = Array.from(document.querySelectorAll(".a-bot"));

    numberOfBot.forEach((child) => {
      info.push({
        name: child.children[0].value,
        speed: child.children[1].value,
      });
    });

    console.log(info);
    return info;
  }

  static newNotification(text) {
    const header = document.querySelector("header");

    let notif = document.createElement("div");
    notif.classList.add("notification");
    notif.innerText = text;

    header.appendChild(notif);

    let top = 3;
    Array.from(document.querySelectorAll(".notification")).forEach((not) => {
      not.style.top = top + 5.5 + "%";
      top = top + 5.5;
    });

    indexRem = setTimeout(() => {
      document.querySelector(".notification").remove();
      if (!notif) {
        clearTimeout(indexRem);
      }
    }, 2000);
  }
}

window.addEventListener("DOMContentLoaded", () => {
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
