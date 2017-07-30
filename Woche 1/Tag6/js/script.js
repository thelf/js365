"use strict";

function getUserName() {
    let nameField = document.getElementById('nameField').value;
    let result = document.getElementById('result');
    
    if (nameField.length < 3) {
        result.textContent = 'Der Name muss mindestens 3 Zeichen lang sein.';
        //alert('Username must contain at least 3 characters');
    } else {
        result.textContent = nameField;
        //alert(nameField);
    }
}
// use an eventlistener for the event
let btn_send = document.getElementById('btn_send');
btn_send.addEventListener('click', getUserName, false);

