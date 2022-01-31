document.querySelectorAll(".game-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const playerSelection = e.target.textContent.toLowerCase();
    playSet(playerSelection);
  });
});

playSet = (playerSelection) => {
  console.log(playerSelection);
};

// create the answers
const answers = ["rock", "paper", "scissors"];

// returns randomly selected answer for computer (util)
function computerPlay() {
  let randNum = Math.floor(Math.random() * 3);
  return answers[randNum];
}

// deduct a single point from player score (util)
function deductPoint(player) {
  player == 0 ? (player = 0) : player--;
}

// display total scores after game (console)
function displayScore(playerScore, computerScore) {
  playerScore > computerScore
    ? console.log("Player wins!")
    : console.log("Computer wins!");
  console.log("Player score: ", playerScore);
  console.log("Computer score: ", computerScore);
}

// keep players score
let playerScore = 0;
let computerScore = 0;

// Return results from a single round
const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return "Tie! Go again!!";
          break;
        case "paper":
          deductPoint(playerScore);
          computerScore++;
          return "You lose! Paper crushes rock";
          break;
        case "scissors":
          deductPoint(computerScore);
          playerScore++;
          return "You win! Rock crushes scissors";
          break;
        default:
          return;
      }
    case "paper":
      switch (computerSelection) {
        case "paper":
          return "Tie! Go again!!";
          break;
        case "rock":
          deductPoint(computerScore);
          playerScore++;
          return "You win! Paper covers rock!!";
          break;
        case "scissors":
          deductPoint(playerScore);
          computerScore++;
          return "You lose! Scissors cut paper!";
          break;
        default:
          return;
      }
    case "scissors":
      switch (computerSelection) {
        case "scissors":
          return "Tie! Go again!!";
          break;
        case "rock":
          deductPoint(playerScore);
          computerScore++;
          return "You lose! Rock crushes paper!!";
          break;
        case "paper":
          deductPoint(computerScore);
          playerScore++;
          return "You win! Scissors cut paper!";
          break;
        default:
          return;
      }
  }
};

// Start a game of "Rock, Paper, Scissors"
// function startGame() {
//   // clear the console
//   console.clear();

//   // loop through 5 rounds of rock, paper, scissors
//   for (let i = 0; i < 5; i++) {
//     // get players' answers
//     let playerAnswer = prompt("Choose Rock, Paper, or Scissors");
//     let computerAnswer = computerPlay();

//     // play round with players' answers

//     if (playerAnswer !== "end") {
//       playRound(playerAnswer.toLowerCase(), computerAnswer.toLowerCase());
//     } else {
//       endGame();
//       return;
//     }

//     // display current game stats (in console)
//     console.log(
//       "Game " + (i + 1) + ": Player: ",
//       playerAnswer,
//       "Computer: ",
//       computerAnswer
//     );
//   }

//   // display player and computer score in console
//   displayScore(playerScore, computerScore);
// }

function endGame() {
  console.clear();
  console.log("Game ended!");
}
