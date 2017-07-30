"use strict";

const MULTIPLIKATOR = 49;
let randomNumber = (Math.floor (Math.random()*MULTIPLIKATOR) +1);

document.querySelector('.ergebnis').innerHTML = randomNumber;
