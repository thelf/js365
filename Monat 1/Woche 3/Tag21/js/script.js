"use strict";

let year = Number(prompt(`Hallo lieber Benutzer, gib bitte ein Jahr ein.`));

/*Validierung
  Abfrage: Ist der Inhalt der Variable "year" keine Zahl? Wenn der Inhalt keine
  Zahl ist, ist die Bedingung erfüllt und der Rückgabewert ist true. Die alert
  Meldung wird ausgegeben.
*/
if (isNaN(year)) {
  alert(`Bitte geben Sie eine Zahl ein!`);
}else {
  if (year % 400 === 0) {
    alert(`Das Jahr ${year} ist ein Schaltjahr!`);
  }else {
    if (year % 100 === 0) {
      alert(`Das Jahr ${year} ist kein Schaltjahr!`);
    }else {
      if (year % 4 === 0) {
        alert(`Das Jahr ${year} ist ein Schaltjahr!`);
      }else {
        alert(`Das Jahr ${year} ist kein Schaltjahr!`);
      }
    }
  }
}
