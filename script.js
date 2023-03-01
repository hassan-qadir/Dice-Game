'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const dice = document.querySelector('.dice');
const btn_new = document.querySelector('.btn--new');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');


let shift0 = true;
let currentscore = 0;


const startFun = function () {
  shift0 = true;
  currentscore = 0;

  score0.textContent = 0;
  score1.textContent = 0;

  current0.textContent = 0;
  current1.textContent = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  dice.classList.add('hidden');
  btn_roll.classList.remove('hidden')
};

startFun();


btn_new.addEventListener('click', startFun);

btn_roll.addEventListener('click', function () {
  const numberDice = Math.trunc(Math.random() * 6 + 1);

  dice.classList.remove('hidden');
  dice.src =`dice-${numberDice}.png`;

  if (numberDice !== 1) {
    currentscore += numberDice;
       if(shift0) {
        if (currentscore >= 20) {
          player0.classList.add('player--winner')
          btn_roll.classList.add('hidden')
          score0.textContent = currentscore
        }else{
        current0.textContent = currentscore;        
        }
    }else{
      if (currentscore >= 20) {
        player1.classList.add('player--winner')
        btn_roll.classList.add('hidden')
        score1.textContent = currentscore;
      }else{
        current1.textContent = currentscore; 
      }
    }
  }else{
    currentscore = 0;

    if(shift0) {
        current0.textContent = currentscore; 
    }else{
        current1.textContent = currentscore; 
    }

    shift0 = !shift0;    
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
    
});

btn_hold.addEventListener('click', function() {
  if(shift0) {
  let score00 = +score0.textContent;
      score00 += currentscore;
      if (score00 >= 20) {
        score0.textContent = score00;
        player0.classList.add('player--winner')
        player1.classList.remove('player--active')
        dice.classList.add('hidden')
        btn_roll.classList.add('hidden')
      }else{
      score0.textContent = score00;
      } 
}else{
  let score01 = +score1.textContent;
      score01 += currentscore;
      if (score01 >= 20) {
        score1.textContent = score01;
        player1.classList.add('player--winner')
        player0.classList.remove('player--active')
        dice.classList.add('hidden')
        btn_roll.classList.add('hidden')
        
      }else{
      score1.textContent = score01; 
      }
}
      currentscore = 0;
  if(shift0) {
      current0.textContent = currentscore;
      
  }else{
      current1.textContent = currentscore; 
  }

      shift0 = !shift0;    
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
})