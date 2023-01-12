let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let shakeHand = document.querySelectorAll(".hand");
let playerHand = document.querySelector("#playersHand");
let computerHand = document.querySelector("#computersHand");
let item = document.querySelector(".chooseItem");
let playBtn = document.querySelector("#play");
let buttonItem = document.querySelectorAll(".buttonItem");
let winnerText = document.querySelector("#winnerText");

let items = ["rock", "scissors", "paper"];
let scorePlayer = 0;
let scoreComputer = 0;

buttonItem.forEach(function (btn) {
  btn.addEventListener("click", function (b) {
  disableButton(true);
    shakeHand.forEach(function (s) {
      s.classList.add("animate");
      setTimeout(function(){
        s.classList.remove("animate");
      },1500)
    });

    winnerText.style.visibility = "hidden";
    let num = Math.floor(Math.random() * 3);

    playerHand.setAttribute("src", "./images/rock.png");
    computerHand.setAttribute("src", "./images/rock.png");

   
   setTimeout(function(){
    computerHand.setAttribute("src", `./images/${items[num]}.png`);
    winnerText.style.visibility = "visible";
    disableButton(false);
    if (b.target.innerHTML == "scissor") {
      playerHand.setAttribute("src", `./images/scissors.png`);
      if (num == 0) {
        winnerText.innerHTML = "computer won";
        scoreComputer += 1;
        computerScore.innerHTML = scoreComputer;
      } else if (num == 1) {
        winnerText.innerHTML = "draw...";
      } else {
        winnerText.innerHTML = "player won";
        scorePlayer += 1;

        playerScore.innerHTML = scorePlayer;
      }
    } else if (b.target.innerHTML == "paper") {
      playerHand.setAttribute("src", "./images/paper.png");
      if (num == 0) {
        winnerText.innerHTML = "player won";
        scorePlayer += 1;

        playerScore.innerHTML = scorePlayer;
      } else if (num == 1) {
        winnerText.innerHTML = "computer won";
        scoreComputer += 1;
        computerScore.innerHTML = scoreComputer;
      } else {
        winnerText.innerHTML = "draw...";
        return;
      }
    } else {
      playerHand.setAttribute("src", "./images/rock.png");
      if (num == 0) {
        winnerText.innerHTML = "draw...";
        return;
      } else if (num == 1) {
        winnerText.innerHTML = "player won";
        scorePlayer += 1;

        playerScore.innerHTML = scorePlayer;
      } else {
        winnerText.innerHTML = "computer won";
        scoreComputer += 1;
        computerScore.innerHTML = scoreComputer;
      }
    }
   },1500)
    
   
  });
});

function disableButton(a){
  document.querySelectorAll(".buttonItem").forEach(function(disableBtn){
    disableBtn.disabled=a;
   })
}
