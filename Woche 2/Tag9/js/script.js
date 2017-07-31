"use strict";

let userName = prompt("Hallo lieber Benutzer, gib bitte deinen Namen ein. Vielen Dank!"); //=> Benutzer Name wird abgefragt
alert(`Hallo ${userName}!`); //=> Benutzer Name wird in einem Dialogfenster ausgegeben

let userDecision = prompt(`Hallo ${userName}, bist du bereit zu starten? Bestätige bitte mit "Ja" oder "Nein".`); //=> Benutzer wird nach Entscheidung gefragt

if(userDecision === "Ja"){
  alert(`Ok prima ${userName}, du hast mit ${userDecision} geantwortet, dann kann es losgehen!`) //=> Verzweigung wird ausgeführt wenn String "Ja" übereinstimmt
  let userFirstQuestion = prompt(`Ok ${userName}, welcher Operator hat die höhere Priorität, * oder +?`); //=> Abfrage an Benutzer mit erster Augabenstellung.

  if(userFirstQuestion === "*"){
    alert(`Prima ${userName}, das ist richtig!`) //=> Wird ausgeführt wenn erster Augabenstellung übereinstimmt und Benutzer mit "*" antwortet.
  }
  if(userFirstQuestion !== "*"){
    alert(`Tut mir leid ${userName}, das ist nicht richtig!`) //=> Wird ausgeführt wenn erster Augabenstellung micht übereinstimmt und Benutzer nicht mit "*" antwortet.
  }
}

if(userDecision === "Nein"){
  alert(`Du hast mit ${userDecision} geantwortet ${userName}. Ich wünsche dir einen schönen Abend!`) //=> Verzweigung wird ausgeführt wenn String "Nein" übereinstimmt
}
