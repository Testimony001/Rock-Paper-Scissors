// console.log("Hello world");
function getComputerChoice() {
  let value = Math.floor(Math.random() * 3);

  if (value === 0) {
    return "rock";
  } else if (value === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// console.log(getComputerChoice(1));

function getHumanChoice() {
  let human = prompt("Enter what would you like to do: rock, paper, scissors");
  return human;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let humanValue = humanChoice.toLowerCase();
    const resultSection = document.getElementById("results");
    const scoreSection = document.getElementById("score");

    if (humanScore >= 5 || computerScore >= 5) {
      return;
    }

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      resultSection.innerHTML += `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore++;
      resultSection.innerHTML += `You loose! ${computerChoice} beats ${humanChoice}`;
    }

    scoreSection.innerHTML += `Human: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
      let winner;
      if (humanScore == 5) {
        winner = "Human";
      } else {
        winner = "Computer";
        resultSection.innerHTML += `${winner} wins the game`;
      }
    }
  }

  document.getElementById("rock").addEventListener("click", () => {
    playRound("rock", getComputerChoice());
  });
  document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", getComputerChoice());
  });
  document.getElementById("scissors").addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
  });

  //   playRound(getHumanChoice(), getComputerChoice());
  //   playRound(getHumanChoice(), getComputerChoice());
  //   playRound(getHumanChoice(), getComputerChoice());
  //   playRound(getHumanChoice(), getComputerChoice());
  //   playRound(getHumanChoice(), getComputerChoice());
}

playGame();
