"use strict";

let year = Number(prompt(`Hallo lieber Benutzer, gib bitte ein Jahr ein.`));

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
