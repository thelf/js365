"use strict";

let wheightYesterday = Number(prompt("Bitte gib dein Gewicht von gestern ein."));
let wheightTody = Number(prompt ("Und gib bitte nun dein Gewicht von heute ein."));
let wheightChangeInPercent = Math.round(Math.abs(wheightTody - wheightYesterday) / wheightYesterday * 100);

if(wheightYesterday < wheightTody){
  alert(`Oh schade, du hast um ${wheightChangeInPercent} Prozent zugenommen`);
}else {
  alert(`Prima, du hast dein Gewicht reduziert um ${wheightChangeInPercent} Prozent.`);
}

if (wheightYesterday === wheightTody){
      alert("Dein Gewicht ist gleich geblieben.");
}
