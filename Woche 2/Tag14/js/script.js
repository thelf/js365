"use strict";

const MINUTE = 60;
let ergebnisMinuten = Math.floor((2000 / MINUTE));
let ergebnisRestSekunden = Math.floor((2000 % MINUTE));

alert(`Zweitausend Sekunden entsprechen ${ergebnisMinuten} Minunten und ${ergebnisRestSekunden} Restsekunden.`);