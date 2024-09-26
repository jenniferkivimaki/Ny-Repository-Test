const playerRollTextfield = document.getElementById("playerRollText");
const aiRollTextfield = document.getElementById("aiRollText");
const resultTextfield = document.getElementById("result");
const winsLoosesPlayerTextfield = document.getElementById("winsLoosesPlayer");
const winsLoosesAiTextfield = document.getElementById("winsLoosesAi");


let playerRoll = 0 ;
let aiRoll = 0;
let playerScore = 0;    //den totala Scoren för player
let aiScore = 0;        //den totala Scoren för ai


//Controllers

loadScore();
updateScore();

const button0 = document.getElementById("button0");
button0.addEventListener("click", function() {
  randomNumberPlayer();
  showRandomNumberPlayer();
  randomNumberAi();
  showRandomNumberAi();
  resultOfRoll();
  updateScore();
  saveScore();
});


//FUNKTIONER FÖR PLAYER
function randomNumberPlayer() {
 playerRoll = Math.floor(Math.random() *6) +1;
}

function showRandomNumberPlayer() {
  playerRollTextfield.innerHTML = "Player Roll: " + playerRoll;
}


//FUNKTIONER FÖR AI
function randomNumberAi() {
 aiRoll= Math.floor(Math.random() *6) +1;
}
                                                                            //View
function showRandomNumberAi() {
  aiRollTextfield.innerHTML = "Computer Roll: " + aiRoll;
}




//FUNKTIONER FÖR ATT JÄMFÖRA vem som vinner
//funktionens namn + de värden som behövs för att utföra funktionen

function resultOfRoll () {
  //här vill jag också lägga till att när detta händer så blir det +1 på resp. score
  if (playerRoll > aiRoll) {
    playerScore++;
    return resultTextfield.innerHTML = "Player Wins! 👏🏼 ";
  }

  else if (playerRoll < aiRoll) {
    aiScore++;
    return resultTextfield.innerHTML = "Computer Win! 👏🏼 ";
  }

  else {
    return resultTextfield.innerHTML = "Draw! 🤷🏼‍♀️ ";
  }
}


function updateScore() {
  winsLoosesPlayerTextfield.innerHTML = "Total score of Player : " + playerScore;
  winsLoosesAiTextfield.innerHTML = "Total score of Computer : " + aiScore;
}


//COOKIES   SKAPA EN FUNKTION FÖR ATT SPARA RESULTATEN I EN COOKIE
function saveScore() {
  document.cookie="previousPlayerScores="+playerScore+";expires= Fri, 27 Sep 2024 00.00:00 UTC";
  document.cookie="previousAiScores="+aiScore+";expires= Fri, 27 Sep 2024 00.00:00 UTC";
}


function loadScore() {
  //game load from 2 cookies
  playerScore = getCookie("previousPlayerScores");
  aiScore = getCookie("previousAiScores");
}


function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }return 0;
}
