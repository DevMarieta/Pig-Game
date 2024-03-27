'use strict';
//selecting element
//отделяме резултата на всеки играч в собствена променслива за всеки играч
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//оделяме всеки един резилтат с натрупване в променлива
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
// текущ резултат
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
//зарчето
const diceEl = document.querySelector('.dice');
//изнасяне на бутоните
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentScore, activePlayer, player;
const init = function () {
  // Възстановяване на резултатите на 0
  const scores = [0, 0];
  //Тази променлива се използва за следене на текущият резултат на активния играч
  let currentScore = 0;
  score = 0;
  currentScore = 0;
  activePlayer = 0; // Зависи кой искате да е началния активен играч
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // Скриване на зарчето
  diceEl.classList.add('hidden');
  // Премахване на класове за победител и активен играч
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner', 'player--active');
  player0El.classList.add('player--active'); // Нека първ
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//rollind dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      //current0El.textContent = currentScore;
    } else {
      //swich to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[1] = scores + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`player--${activePlayer}`)
        .classList.remove('player--activ');
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init);