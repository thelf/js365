"use strict";

let userFirstName = prompt(`Hallo lieber Benutzer, gib bitte deinen Vornamen ein`);
let userName = prompt(`Gib bitte nun deinen Nachnamen ein`);
let userMale = prompt(`Bist du ein Mann oder eine Frau?`);
let userAge = (prompt(`Wie alt bist du?`));

let errorMessage = ""; //Die Variable errorMessage hat keinen Inhalt

/* Wenn die Bedingung erfüllt ist, also der Vorname kleiner als 2 Zeichen oder
länger als 100 Zeichen ist, dann wird die Zeichenkette "Vorname" bzw.
"Nachname" in die (noch) leere Variable errorMessage eingesetzt.
*/
if (userFirstName.length < 2 || userFirstName.length > 100) {
  errorMessage += "Vorname "; // Kurzschreibweise für errorMessage = errorMessage + "Vorname ";
}

if (userName.length < 2 || userName.length > 100) {
  errorMessage += "Nachname ";
}

/*Wenn als Geschlecht weder "Mann" noch "Frau" eingeben wird, erscheint die
  Fehlermeldung
*/
if (userMale !== "Mann" && userMale !== "Frau") {
  errorMessage += "Geschlecht ";
}

/*Die Funktion isNaN prüft: Ist die Eingabe keine Zahl?
  Antwort bei einer Zahl: Doch, es ist eine Zahl (Rückgabewert false).
  Die Bedigung ist nicht erfüllt, der else-Zweig wird ausgeführt.
  Antwort wenn es keine Zahl ist: Ja, es ist keine Zahl (Rückgabewert true).
  Die Bedigung ist erfüllt, der if-Zweig wird ausgeführt und eine Fehlermeldung
  ausgegeben.
*/
if (isNaN(userAge) || userAge >= 150) {
  errorMessage += "Alter ";
}

/*Wenn die Variable errorMessage leer ist, erfolgt die Meldung "Ok!". Wenn die
  Variable errorMessage einen Wert enhält, wird sie im else-Zweig angezeigt.
*/
if (errorMessage === "") {
  alert("Ok!");
}else {
  alert(`Fehler! Die folgenden Eingaben sind falsch: ${errorMessage}.`);
}
