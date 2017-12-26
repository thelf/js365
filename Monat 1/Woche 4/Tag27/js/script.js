"use strict";

let name = "Hans    Mustermann ";
let spacePosition = name.lastIndexOf(" ");
let firstName = name.substr(0, spacePosition).trim();
let lastName = name.substr(spacePosition + 1).trim();

console.log(firstName);
console.log(lastName);
