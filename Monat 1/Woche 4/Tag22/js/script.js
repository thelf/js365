"use strict";

let userName = prompt(`Hallo lieber Teilnehmer, verrate uns bitte deinen Namen.`);

alert(`Willkommen ${userName}. Wir freuen uns, dass du teilnimmst.`);

let userAnswer = prompt(`Nun geht es los ${userName}. Fühlst du dich fit genug um zu starten?` +
` Dann gib bitte "Ja" ein. Oder breche mit "Nein" das Quiz ab.`);

if (userAnswer === `Ja`) {

  let firstQuestion = prompt(`Klasse, das Quiz beginnt nun!` +
  ` Hier ist die erste Frage ${userName}. Welcher Operator hat die höhere Priorität: "*" oder "?"`);

  if (firstQuestion === `*`) {
    alert(`Die Antwort ist richtig ${userName}!`);

    let secondQuestion = prompt(`Hier kommt die zweite Frage ${userName}.` +
    ` Um welchen Datentyp handelt es sich bei "Haus" ? Um den Datentyp "string" oder "number"?`);

    if (secondQuestion === `string`) {
      alert(`Die Antwort ist richtig ${userName}!`);
    }else {
      alert(`Die Antwort ist leider falsch ${userName}!`);
    }

    let thirdQuestion = prompt(`Prima, hier ist die dritte Frage. ` +
    ` Wie lautet der deutsche Ausdruck für if? Lautet er wenn oder falls?`);

    if (thirdQuestion === `wenn` || thirdQuestion === `falls`) {
      alert(`Die Antwort ist richtig ${userName}!`);
    }else {
      alert(`Die Antwort ist leider falsch ${userName}!`);
    }

    let forthQuestion = prompt(`Hier kommt eine weitere Aufgabe ${userName}. ` +
    ` Geben Sie einen String ein, mit einer Länge zwischen 8 bis 15 Zeichen.`);

    if (forthQuestion.length >= 8 && forthQuestion.length <= 15) {
      alert(`Prima gemacht ${userName}!`);
    }else {
      alert(`Der String hat leider nicht die richtige Länge ${userName}.`);
    }
  }else {
    alert(`Die Antwort ist leider falsch ${userName}!`);
  }
}else {
  alert(`Schade, wir wünschen dir noch einen schönen Tag ${userName}.`);
}
