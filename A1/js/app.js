const button0 = document.getElementById("button0");
button0.addEventListener("click", function() {
  randomNumberPlayer();
  showRandomNumberPlayer();
  randomNumberPlayer();
  showRandomNumberAi();
})

//DÄR PLAYERS KAST VISAS
const playerRollTextfield = document.getElementById("playerRollText");
const aiRollTextfield = document.getElementById("aiRollText");
const resultTextfield = document.getElementById("result");



//Controllers
//FUNKTIONER FÖR PLAYER
function randomNumberPlayer() {
return Math.floor(Math.random() *6) +1;
}
function showRandomNumberPlayer() {
  playerRollTextfield.innerHTML = "Player Roll: " + randomNumberPlayer();
}


//FUNKTIONER FÖR AI
function randomNumberAi() {
return Math.floor(Math.random() *6) +1;
}
                                                                            //View
function showRandomNumberAi() {
  aiRollTextfield.innerHTML = "Computer Roll: " + randomNumberAi();
}

//FUNKTIONER FÖR ATT JÄMFÖRA
