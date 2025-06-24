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

    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You loose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
}

playGame();
