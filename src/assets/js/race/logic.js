import { TextProcess, theText } from "./text_process.js";
import {
  OthersFunc,
  interval,
  modifyGo,
  modifyMinutes,
  modifyWpmList,
} from "./others.js";

import {
  ViewsFunc,
  timeoutCounter,
  timeoutApp,
  modifyChartInView,
  customId,
} from "../views/index.js";
import { MoveFunc, modifyWord, modifyChar, modifyMistakes } from "./move.js";

let start = 0;

export class Logic extends ViewsFunc {
  startState() {
    const elmts = Logic.getViewElements();
    const moveElms = Logic.getMoveElms();

    // initialize OthersFunc
    const othersFunc = new OthersFunc();
    // initialize MoveFunc
    const moveFunc = new MoveFunc();
    // get the canva parent for the chart and create chart canva
    const chartParent = document.querySelector(".chartjs");
    const chartjs = document.createElement("canvas");
    chartjs.setAttribute("id", "chart");

    // increment start state to 1 (on mode)
    start++;

    if (start >= 1) {
      // car back to start
      moveElms.car.style.left = 0;
      // empty type input
      moveElms.typeInput.value = "";
      // reload race text
      moveElms.passed.innerText = "";

      const callText = new TextProcess();
      callText.giveTheText();
      console.log(theText);

      moveFunc.loadText();

      // restart counter
      othersFunc.counterTimer(5);
      // append chart
      chartParent.appendChild(chartjs);

      // restart check for the chart
      modifyChartInView(0);

      // take the counteof the time takes to 00:00
      document.querySelector(".time-taked p").innerText = "00:00";
    }
  }

  endState() {
    const moveElms = Logic.getMoveElms();

    const chart = document.querySelector("#chart");

    // bring start state back to zero
    start = 0;
    // clear the time counter interval
    clearInterval(interval);
    // clear counter timer appearance timeout
    clearTimeout(timeoutCounter);
    // clear app appearance timeout
    clearTimeout(timeoutApp);
    // clear move custom car timeout
    clearTimeout(customId);
    // put go to 0 to restart the input restriction function when waiting for the counter timer
    modifyGo(0);

    modifyWord(0);
    modifyChar(0);
    modifyMistakes(0);

    modifyMinutes(0);

    modifyWpmList(0);

    moveElms.typeInput.style.backgroundColor = "var(--bk-second1)";

    // remove chart
    if (chart) {
      chart.remove();
    }

    // hide result UI
    ViewsFunc.hideResultUi();

    // remove bots
    if (document.querySelector(".bot")) {
      Array.from(document.querySelectorAll(".bot")).forEach((bot) => {
        bot.remove();
      });
    }
  }

  //   helpers
  static getMoveElms() {
    return MoveFunc.getElmts();
  }
}
