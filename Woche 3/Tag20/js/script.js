"use strict";

const PROZENT = 100;

let userWeightYesterday = Number(prompt(`Hallo lieber Benutzer, bitte verrate
uns dein gestriges Gewicht in Kilogramm.`));

let userWeightToday = Number(prompt(`Und nun verrate uns bitte dein Gewicht von heute.`));

if (userWeightToday < userWeightYesterday) {

  let userWeightLess = ((userWeightToday - userWeightYesterday)
  / userWeightYesterday
  * PROZENT)
  .toFixed(2);

  alert(`Prima du hast um ${userWeightLess}% abgenommen.
  Das entspricht ${userWeightYesterday - userWeightToday}kg.`);
}

if (userWeightToday > userWeightYesterday) {
  let userWeightMore = ((userWeightToday - userWeightYesterday)
  / userWeightYesterday
  * PROZENT)
  .toFixed(2);

  alert(`Schade, du hast um ${userWeightMore}% zugenommen.
  Das entspricht ${userWeightToday - userWeightYesterday}kg.`);
}

if (userWeightToday === userWeightYesterday) {
  alert(`Ok, dein Gewicht hat sich nicht verändert.`);
}
