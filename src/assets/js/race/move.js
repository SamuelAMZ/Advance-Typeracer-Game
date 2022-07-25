import { OthersFunc, modifyGo, go } from "./others.js";
import { Restrictions } from "./validation.js";
import { theText } from "./text_process.js";
import { ViewsFunc } from "../views/index.js";

// class
class Move {
  constructor(car, typeInput, textToType, passed) {
    this.car = car;
    this.typeInput = typeInput;
    this.textToType = textToType;
    this.passed = passed;
  }
}
let currentTyped = [];
export let word = 0;
export let char = 0;
export let mistakes = 0;
// due to  the immutable exported module values that is causing issues when modifying word value in other files
export function modifyWord(value) {
  word = value;
}
export function modifyChar(value) {
  char = value;
}
export function modifyMistakes(value) {
  mistakes = value;
}
let validatedArr = [];

// functions
export class MoveFunc {
  loadText() {
    let getElmts = MoveFunc.getElmts();
    let textToLoad = MoveFunc.raceText();

    getElmts.textToType.innerText = textToLoad;
  }

  move(e) {
    let getElmts = MoveFunc.getElmts();
    let width = MoveFunc.getWidth(e);
    let passed = MoveFunc.verifyLetters(e);

    const otherFunc = new OthersFunc();
    const validation = new Restrictions();

    if (width === 100 && passed) {
      // to exactly 100% left value at the end
      getElmts.car.style.left = "100%";
      // once race finish put go back to 0
      modifyGo(0);
      // show result
      ViewsFunc.showNotification();
      // show result
      otherFunc.showResult();
      // show the graph
      ViewsFunc.chartFunc();
      // show the result UI
      ViewsFunc.showResultUi();
    } else if (width < 100 && passed) {
      getElmts.car.style.left = width + "%";
    }

    // upadate the race text
    MoveFunc.updateRaceText(e);

    // check if text typed match the current text and print statut colors depending on that
    MoveFunc.passedFailedIndicator(e);

    // fix span space issue
    MoveFunc.fixSpanSpace(e);
    // empty input per word
    // MoveFunc.emptyInput(e);

    // get the current typed input and store it in an array
    MoveFunc.getCurrentTypedValueArr(e);

    MoveFunc.words(e);

    // restrictions
    validation.inputValideAfterTheGo(go);
  }

  // helpers
  static raceText() {
    let raceText = theText;

    return raceText;
  }
  static getElmts() {
    const elmts = new Move(
      document.getElementById("you-car"),
      document.getElementById("type-input"),
      document.getElementById("text-to-type"),
      document.getElementById("passed")
    );

    return elmts;
  }

  // have the e.target.value the current typed text into an array to have more flexibility on the value itself
  static getCurrentTypedValueArr(e) {
    let passed = MoveFunc.verifyLetters(e);

    if (passed) {
      currentTyped.push(e.data);
    }

    return currentTyped.join("");
  }

  //   get the left value for the move of the car
  static getWidth(e) {
    let getElmts = MoveFunc.getElmts();
    let raceText = MoveFunc.raceText();

    let totalPointToReach = raceText.split("").length;
    let countNumberOfLettersInTheInput;

    let texts = e.target.value.split("");
    countNumberOfLettersInTheInput = texts.length;

    // the math for the width
    let width = Math.round(
      countNumberOfLettersInTheInput / (totalPointToReach / 100)
    );

    return width;
  }

  // check if text typed match the current text and return true or false depending on that
  static verifyLetters(e) {
    let getElmts = MoveFunc.getElmts();
    let raceText = MoveFunc.raceText();

    let passed;
    // console.log(validatedArr.join(""), validatedArr);

    let currentTyped = e.target.value;

    let verify = raceText.split("").splice(0, currentTyped.length).join("");

    // conditions
    if (verify === currentTyped) {
      passed = true;
    }
    if (verify !== currentTyped) {
      passed = false;
    }

    return passed;
  }

  //   add green or reg background to text depending on passed passed or failed
  static passedFailedIndicator(e) {
    let getElmts = MoveFunc.getElmts();
    let passed = MoveFunc.verifyLetters(e);

    let currentTyped = e.target.value;

    if (!passed) {
      //   turn the input to red background when the input doean's match the text
      getElmts.typeInput.style.background = "rgba(219, 57, 73, 1 )";
      mistakes++;
    }

    if (passed) {
      getElmts.typeInput.style.backgroundColor = "var(--bk-second1)";
      // change here
      getElmts.passed.innerText = validatedArr.join("");
    }
  }

  //   update the race text per each type
  static updateRaceText(e) {
    let getElmts = MoveFunc.getElmts();
    let raceText = MoveFunc.raceText();
    let passed = MoveFunc.verifyLetters(e);

    // change here
    let currentTyped = e.target.value;
    let curr = raceText.split("");

    if (passed) {
      for (let i = 0; i < currentTyped.length; i++) {
        let validated = curr.splice(0, 1);
        validatedArr.push(validated);
      }
      // update the race text
      getElmts.textToType.innerText = curr.join("");

      validatedArr.splice(0, currentTyped.length - 1);

      if (validatedArr.length > currentTyped.length) {
        let diff = validatedArr.length - currentTyped.length;
        validatedArr.splice(0, diff);
      }
    }
  }

  //   fix the little space issue showing between two spans
  static fixSpanSpace(e) {
    let getElmts = MoveFunc.getElmts();
    let raceText = MoveFunc.raceText();
    let passed = MoveFunc.verifyLetters(e);

    // chnage here
    let curText = e.target.value.split("");
    let lastLetterIndex = curText.length - 1;

    let raceTextArr = raceText.split("");
    let lastLetterRaceSpace = raceTextArr[lastLetterIndex + 1];

    if (lastLetterRaceSpace === " " && passed) {
      getElmts.passed.style.marginRight = "5px";
    }
    if (lastLetterRaceSpace !== " " && passed) {
      getElmts.passed.style.marginRight = "0px";
    }
  }

  //   empty the input per word
  static emptyInput(e) {
    let getElmts = MoveFunc.getElmts();
    let raceText = MoveFunc.raceText();
    let passed = MoveFunc.verifyLetters(e);

    if (e.data === " " && passed) {
      e.target.value = "";
    }

    // // change here
    // let curText = e.target.value.split("");
    // let lastLetterIndex = curText.length - 1;

    // let raceTextArr = raceText.split("");
    // let lastLetterRaceSpace = raceTextArr[lastLetterIndex];

    // if (lastLetterRaceSpace === " ") {
    //   saveCurrentInput++;
    //   e.target.value = "";
    // }
  }

  // count the number of words
  static words(e) {
    let getElmts = MoveFunc.getElmts();

    // words
    let wordArr = getElmts.passed.innerText.split(" ");
    word = wordArr.length;

    // chars
    let charArr = getElmts.passed.innerText.split("");
    char = charArr.length;
  }

  // you vs computer func to load the computer car
  static loadAutoCar() {
    let randomCarColor = [
      "imgs/car.svg",
      "imgs/car2.svg",
      "imgs/car3.svg",
      "imgs/car4.svg",
      "imgs/car5.svg",
      "imgs/car6.svg",
    ];

    let botCarColor = Math.floor(Math.random() * 6);

    // car creation
    let carContainer = document.createElement("div");
    carContainer.classList.add("car");
    carContainer.classList.add("bot");
    let carStart = document.createElement("div");
    carStart.classList.add("car-start");
    let carPist = document.createElement("div");
    carPist.classList.add("car-container");
    let actuelCar = document.createElement("img");
    actuelCar.src = randomCarColor[botCarColor];
    let wpmAndCpmDiv = document.createElement("div");
    wpmAndCpmDiv.classList.add("wpm-and-cpm");
    wpmAndCpmDiv.classList.add("bot-wpm-and-cpm");
    let wpmP = document.createElement("p");
    wpmP.setAttribute("id", "wpm botWpm");
    let cpmP = document.createElement("p");
    cpmP.setAttribute("id", "cpm botCpm");
    // create bot names
    let botName = document.createElement("div");
    botName.classList.add("you-name");
    botName.classList.add("you-name-bot");
    let botP = document.createElement("p");
    botP.innerText = "Bot";
    botName.appendChild(botP);

    carPist.appendChild(actuelCar);
    carContainer.appendChild(carStart);
    carContainer.appendChild(carPist);
    wpmAndCpmDiv.appendChild(wpmP);
    wpmAndCpmDiv.appendChild(cpmP);
    carContainer.appendChild(wpmAndCpmDiv);
    carContainer.appendChild(botName);

    // append the car
    let newCarsContainer = document.querySelector(".type-cars");
    newCarsContainer.appendChild(carContainer);
  }
}
