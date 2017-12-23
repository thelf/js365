"use strict";

let userName = prompt("Hallo lieber Teilnehmer, verrate uns bitte deinen Namen.");

alert(`Willkommen ${userName}. Wir freuen uns, dass du teilnimmst.`);

let userAnswer = prompt(`Nun geht es los ${userName}. Fühlst du dich fit genug um zu starten? \n\nDann gib bitte "Ja" ein. Oder breche mit "Nein" das Quiz ab.`);

if(userAnswer === "Ja"){

  let firstQuestion = prompt(`Klasse, das Quiz beginnt nun! Hier ist die erste Frage ${userName}. Welcher Operator hat die höhere Priorität: "*" oder "?"`);

    if(firstQuestion === "*"){
      alert(`Die Antwort ist richtig ${userName}!`);

      let secondQuestion = prompt(`Hier kommt die zweite Frage ${userName}. \n\nUm welchen Datentyp handelt es sich bei "Haus" ? Um den Datentyp "string" oder "number"?`);

        if(secondQuestion === "string"){
          alert(`Die Antwort ist richtig ${userName}!`);
        }

        if(secondQuestion !== "string"){
          alert(`Die Antwort ist leider falsch ${userName}!`);
        }
    }

    if(firstQuestion !== "*"){
      alert(`Die Antwort ist leider falsch ${userName}!`);
    }
}

if(userAnswer !== "Ja"){
  alert(`Schade, wir wünschen dir noch einen schönen Tag ${userName}.`);
}
