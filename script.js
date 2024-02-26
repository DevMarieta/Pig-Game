'use strict';
<<<<<<< HEAD
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('.score--1');
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');
=======
function setMood() {
    var moodInput = document.getElementById("mood").value;
    var body = document.body;

    if (moodInput >= 1 && moodInput <= 5) {
        switch (parseInt(moodInput)) {
            case 1:
                body.style.backgroundColor = "#ff9999"; // Red
                break;
            case 2:
                body.style.backgroundColor = "#ffb366"; // Orange
                break;
            case 3:
                body.style.backgroundColor = "#ffff99"; // Yellow
                break;
            case 4:
                body.style.backgroundColor = "#99ff99"; // Green
                break;
            case 5:
                body.style.backgroundColor = "#99ccff"; // Blue
                break;
            default:
                break;
        }
    } else {
        alert("Please enter a number between 1 and 5.");
    }
}
>>>>>>> 3038b35ab04c55c0d6e76edda00fc1954e45f27b
