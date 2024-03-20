'use strict';

//selecting element
const score0El = document.querySelector('.score--0');
const score1El = document.querySelector('.scoree--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.querySelectorById('current--0');
const current1El = document.querySelectorById('current--1');
//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//rollind dice functionality
btnRoll.addEventListener('click', function () {
  //1.generation random dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2.display dice
  diceEl.classList.remove('hidden');
  diceEl.src = 'dice-${dice}.png';
  //3.check for rolled 1:
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    //swich to next player
  }
});
