//html getElementById

const playerRoll = document.getElementById('playerRoll');
const aiRoll = document.getElementById('aiRoll');
const playerResult = document.getElementById('playerResult');
const aiResult = document.getElementById('aiResult');
const evaluation = document.getElementById('evaluation');
const button1 = document.getElementById('button1');
button1.addEventListener('click', function(){
randomNumberPlayer();
randomNumberAi();


})

//Variables

let playerRoll= 0;
let aiRoll= 0;
let playerScore= 0;
let aiScore= 0;
let evaluation= 0;

//Controllers

function randomNumberPlayer() {
  return Math.floor(Math.random() * playerRoll++);
}

function randomNumberAi() {
  return Math.floor(Math.random() * aiRoll++);
}

function evaluateResult() {
return
}
