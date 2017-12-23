"use strict";

const MWST = 1.20;

let nettoPreis = Number(prompt(`Bitte geben Sie den Netto Preis ein.`));
let bruttoPreis = nettoPreis * MWST;

alert(`Der Bruttopreis von ${nettoPreis},- € beträgt ${bruttoPreis},- €`);
