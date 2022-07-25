import { MoveFunc } from "./move.js";

export class Restrictions {
  inputValideAfterTheGo(go) {
    let getElmts = MoveFunc.getElmts();

    if (go !== 1) {
      // make the input unusable when waiting for the counter timer
      getElmts.typeInput.setAttribute("readonly", "readonly");
    }

    if (go === 1) {
      // once the GO put a focus on the input and remove the restriction
      getElmts.typeInput.removeAttribute("readonly");
      getElmts.typeInput.focus();
    }
  }
  static disableCopy() {
    document.querySelector(".type-text").addEventListener(
      "copy",
      (e) => {
        // PREVENT THE DEFAULT COPY ACTION
        e.preventDefault();
        // CHANGE THE COPIED TEXT
        e.clipboardData.setData("text/plain", "");
      },
      false
    );
  }
}

Restrictions.disableCopy();
