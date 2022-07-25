// fetch texts api
export let theText;

export class TextProcess {
  giveTheText() {
    let rand = Math.floor(Math.random() * TextProcess.texts().length);

    theText = TextProcess.texts()[rand].trim();
    return theText;
  }

  static texts() {
    let text = [
      "Billie Jean is not my lover She's just a girl who claims that I am the one.",
      "Look, if you had, one shot, or one opportunity to seize everything you ever wanted, in one moment, would you capture it, or just let it slip?",
      "It's a long way to the top, if you wanna rock n roll.",
      "We are the champions, my friends And we'll keep on fighting 'til the end.",
      "All the single ladies Now put your hands up.",
      "Oh, I wanna dance with somebody I wanna feel the heat with somebody.",
      "It's the eye of the tiger, it's the dream of the fight.",
      "Don't want to close my eyes I don't want to fall asleep Cause I'd miss you baby And I don't want to miss a thing.",
      "And it seems to me you lived your life Like a candle in the wind Never knowing who to cling to When the rain set in And I would have liked to have known you.",
      "Don't, don't you want me? You know I can't believe it when I hear that you won't see me Don't, don't you want me?",
      "And girls they wanna have fun Oh girls just want to have fun.",
      "Blackbird singing in the dead of night. Take these broken wings and learn to fly.",
      "You shake my nerves and you rattle my brain, too much love drives a man insane. You broke my will, but what a thrill. Goodness gracious, great balls of fire.",
      "Pretty woman, walkin' down the street Pretty woman the kind I like to meet.",
    ];

    return text;
  }
}
