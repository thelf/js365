"use strict";

let minuten = (2000 / 60);
let restSekunden = (2000 % 60);

let minutenGerundet = Math.floor(2000 / 60);
let sekundenGerundet = Math.floor(2000 % 60);

console.log(`Zweitausend Sekunden enthalten ${minuten} Minuten und ${restSekunden} Rest Sekunden.`)
console.log(`Abgerundet sind das ${minutenGerundet} Minuten und ${sekundenGerundet} Rest Sekunden.`)
