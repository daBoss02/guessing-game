'use-strict';

/*
  Seth Vandenbos
  
  Guessing Game
*/

// Utility Functions
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

// Accessing Elements
const guess = select('.guess');
const restart = select('.start');
const input = select('.input');
const output = select('.output p');
const countPlace = select('.count p');
let count;
count = 0;
count.innerText = `Tries: ${count}`
let random = Math.trunc(Math.random() * 10) + 1;
console.log(random)
input.value = '';
countPlace.innerText = `Tries: ${count}`

// Guess
onEvent('click', guess, function() {
  let inp = input.value;
  count++
  if (!isNaN(inp) && inp > 0 && inp <= 10) {
    if (inp == random) {
      output.innerText = `${inp} is Correct!!`
    } else if (inp > random) {
      output.innerText = `${inp} is too high`
      countPlace.innerText = `Tries: ${count}`
    } else {
      output.innerText = `${inp} is too low`
      countPlace.innerText = `Tries: ${count}`
    }
  }
  input.value = '';
})


// Reload
onEvent('click', restart, function() {
  count = 0;
  countPlace.innerText = `Tries: ${count}`;
  input.value = '';
  output.innerText = 'Pick a number between 1 and 10';
  random = Math.trunc(Math.random() * 10) + 1;
  console.log(random)
})