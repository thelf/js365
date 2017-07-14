"use strict";

let userVorname = prompt( "Bitte geben Sie Ihren Vornamen ein" );
let userName = prompt( "Bitte geben Sie Ihren Nachnamen ein" );

console.log( "Hallo " + userVorname + ". " + "Dein Nachname lautet " + userName + "." );
console.log( `Hallo ${userVorname}. Dein Nachname lautet ${userName}.` );
console.log( "Hallo " + userVorname + ` Dein Nachname lautet ${userName}` );
