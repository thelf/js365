"use strict";

let name = "Hans Peter Mustermann";
let spacePosition = name.lastIndexOf(" ");

// Die Zählung beginnt bei 0 (L von Ladislaus, von dort 9 Zeichen nach rechts)
let firstName = name.substr(0, spacePosition);

// Für den Nachnamen werden alle Buchstaben ab Position 10 benötigt. Auf das 2te Argumment kann verzichtet werden.
let lastName = name.substr(spacePosition +1);

console.log(firstName);
console.log(lastName);
