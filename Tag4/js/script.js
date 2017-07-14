"use strict";

let strecke = Number(prompt( "Bitte geben Sie die gefahrenen Kilometer ein." ));
let liter = Number(prompt( "Bitte geben Sie nun die verbrauchte Benzinmenge ein." ));
let tankGroesse = Number(prompt( "Bitte geben Sie abschließend auch noch Ihre Tankgröße an." ));

const KM_ANGABE = 100

let verbrauch = Math.round(liter / strecke * KM_ANGABE);
let reichweite = Math.round(tankGroesse * strecke / verbrauch);

alert( `Der Kraftstoffverbrauch auf 100 km beträgt ${verbrauch} Liter. 
Ihre maximale Reichweite bei einer Tankgröße von ${tankGroesse} Litern beträgt ${reichweite} Kilometer:` );