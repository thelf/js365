"use strict";

let txt = "Hallo Welt - querySelector";
let txtId = "Hallo Welt - getElementById";
let txtInner = "Hallo Welt - getElementById with inner HTML";

document.querySelector('output').innerText = txt;
document.getElementById('absatz').innerText = txtId;
document.getElementById('absatz_zwei').innerHTML = "<strong>" + txtInner + "</strong>";
