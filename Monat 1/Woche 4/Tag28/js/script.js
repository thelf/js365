"use strict";

let name = prompt("Bitte verrate uns deinen Vor- und Nachnamen");
let spacePosition = name.indexOf(" ");
let spacePositionLastName = name.lastIndexOf(" ");

let firstName = name.substr(0, spacePosition);
let lastName = name.substr(spacePosition + 1);
let lastNameShort = name.charAt(spacePosition + 1);

alert(`Hallo lieber Benutzer, dein Vorname lautet ${firstName} und dein Nachname ${lastName}. Beides zusammen ergibt abgekürzt ${firstName} ${lastNameShort}.`);
