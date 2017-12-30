"use strict";

// Der Vor- und Nachname wird als Parameter durch den Funktionsaufruf übergeben.
let logTransformedName = (firstName, lastName) => {
  /* Die charAt()-Methode gibt das angegebene Zeichen eines Strings wieder.
     Hier das erste Zeichen an Position 0 des Vornamens
  */
  let letterPosition = firstName.charAt(0);
  alert(`Herzlich Willkommen ${lastName}, ${letterPosition}.`);
};

// logTransformedName("Peter", "Mustermann");
logTransformedName(prompt("Bitte geben Sie Ihren Vornamen ein"), prompt("Und un geben Sie bitte Ihren Nachnamen ein"));
