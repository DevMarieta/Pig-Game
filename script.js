'use strict';

//selecting element

//отделяме резултата на всеки играч в собствена променслива за всеки играч

const player1El = document.querySelector('.player--1');

//оделяме всеки един резилтат с натрупване в променлива
const score0El = document.querySelector('#score--0');
const score1El = document.querySelectorById('score--1');
// текущ резултат
const current0El = document.querySelectorById('current--0');
const current1El = document.querySelectorById('current--1');
//зарчето
const diceEl = document.querySelector('.dice');
//изнасяне на бутоните
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
//.textContent = 0; задава текстовото съдържание на този елемент на 0.
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
// точките на всеки играч
const scores = [0, 0];
//Тази променлива се използва за следене на текущият резултат на активния играч
let currentScore = 0;
// активен играч
let activePlayer = 0;

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
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    current0El.textContent = currentScore;
  } else {
    //swich to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  scores[1] = scores + currentScore;
document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer]
});
