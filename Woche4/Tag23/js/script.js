"use strict";

const MIN_LENGHT = 2;
const MAX_LENGHT = 100;
const MAX_AGE = 150;

let userFirstName = prompt(`Hallo lieber Benutzer, gib bitte deinen Vornamen ein`);
let userName = prompt(`Gib bitte nun deinen Nachnamen ein`);
let userMale = prompt(`Bist du ein Mann oder eine Frau?`);
let userAge = Number(prompt(`Wie alt bist du?`));

if (userFirstName.length >= MIN_LENGHT && userFirstName.length <= MAX_LENGHT
&& userName.length >= MIN_LENGHT && userName.length <= MAX_LENGHT
&& userMale === "Mann"
|| userMale === "Frau"
&& userAge <= MAX_AGE
) {
  alert(`Ok ${userFirstName} ${userName}, deine Angaben waren richtig.`);
}else {
  alert(`${userFirstName} ${userName} Deine Angaben waren leider falsch.`);
}
