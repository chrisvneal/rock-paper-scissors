// When a button is initially clicked, it starts game and plays a set w/ player's selection
document.querySelectorAll(".game-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const playerSelection = e.target.textContent.toLowerCase();
    playSet(playerSelection);
  });
});

// keep players score
let userScore = 0;
let computerScore = 0;
const userAnswerOutput = document.querySelector(".user-answer");
const computerAnswerOutput = document.querySelector(".computer-answer");
const userScoreOutput = document.querySelector(".user-score");
const computerScoreOutput = document.querySelector(".computer-score");
const winnerOutput = document.querySelector(".winner");

// get player and computer answers, display set outcome
const playSet = (playerSelection) => {
  // get computer's selection
  const computerSelection = computerPlay();

  // for each set, change player score
  changeScore(playerSelection, computerSelection);

  // check scores to see if have winner yet
  checkScores();

  displaySetOutcome(playerSelection, computerSelection);
};

// returns randomly selected answer for computer
const computerPlay = () => {
  const answers = ["rock", "paper", "scissors"];
  let randNum = Math.floor(Math.random() * 3);
  return answers[randNum];
};

// populate game stat fields
let displaySetOutcome = (playerSelection, computerSelection) => {
  userAnswerOutput.innerHTML = playerSelection;
  computerAnswerOutput.innerHTML = computerSelection;
  userScoreOutput.innerHTML = userScore;
  computerScoreOutput.innerHTML = computerScore;
};

let addScore = (player) => {
  player === "user" ? userScore++ : computerScore++;
  // console.log("score: ", userScore, computerScore);
};

// Return results from a single set
let changeScore = (userSelection, computerSelection) => {
  // console.log(userSelection, computerSelection);
  switch (userSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return;
        case "paper":
          addScore("computer");
          break;
        case "scissors":
          addScore("user");
          break;
        default:
          break;
      }
      break;
    case "paper":
      switch (computerSelection) {
        case "paper":
          return;
        case "rock":
          addScore("user");
          break;
        case "scissors":
          addScore("computer");
          break;
        default:
          break;
      }
      break;
    case "scissors":
      switch (computerSelection) {
        case "scissors":
          return;
          break;
        case "rock":
          addScore("computer");
          break;
        case "paper":
          addScore("user");
          break;
        default:
          break;
      }
      break;
    default:
      return;
  }
};

let winner;
// Check scores to see if there is a winner
let checkScores = () => {
  if (userScore === 5) {
    winner = "The User";
  }

  if (computerScore === 5) {
    winner = "Computer";
    setTimeout(announceWinner(winner), 6000);
  }

  if (winner) {
    // console.clear();
    // console.log(winner);
    setTimeout(announceWinner, 500);
    setTimeout(resetGame, 3000);
  }
};

// announce winner at the end of game
let announceWinner = () => {
  let message = `${winner} is the winner of this round! Congratz!!`;
  winnerOutput.innerHTML = message;
};

// reset all fields
let resetGame = () => {
  userScore = 0;
  computerScore = 0;
  userScoreOutput.innerHTML = userScore;
  computerScoreOutput.innerHTML = computerScore;
  userAnswerOutput.innerHTML = "";
  computerAnswerOutput.innerHTML = "";
  winnerOutput.innerHTML = "";
  winner = "";
};
