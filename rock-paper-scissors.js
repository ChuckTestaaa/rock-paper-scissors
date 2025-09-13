let humanScore = 0
let computerScore = 0

let choices = document.querySelector('#choices');

const score = document.querySelector('#score');
const result = document.querySelector('#result')



choices.addEventListener('click', (event) => {
  let playerSelection = event.target;

  playRound(playerSelection.id, getComputerChoice());

  if (humanScore === 5 && computerScore === 5) {
    result.textContent = `Draw!`;

  } else if (humanScore === 5) {
    result.textContent = `Human Wins!`;
  } else if (computerScore === 5) {
    result.textContent = `Computer Wins!`;
  }



});











function getComputerChoice() {
  let max = 3
  let randomNumber = getRandomInt(max)

  if (randomNumber === 0) {
    return 'rock'
  } else if (randomNumber === 1) {
    return 'paper'
  }

  return 'scissors'
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// function getHumanChoice() {
//   const input = prompt('Type "rock", "paper", or "scissors"')
//   return input
// }

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase()

  switch (humanChoice) {
    case 'rock':
      if (computerChoice === 'paper') {
        computerScore++
      } else if (computerChoice === 'scissors') {
        humanScore++
      } else {
        humanScore++
        computerScore++
      }
      break;
    case 'paper':
      if (computerChoice === 'rock') {
        humanScore++
      } else if (computerChoice === 'scissors') {
        computerScore++
      } else {
        humanScore++
        computerScore++
      }
      break;
    case 'scissors':
      if (computerChoice === 'rock') {
        computerScore++
      } else if (computerChoice === 'paper') {
        humanScore++
      } else {
        humanScore++
        computerScore++
      }
      break;
    default:
      console.log("Invalid values")
  }

  score.textContent = `Human score: ${humanScore}, Computer score: ${computerScore}`;


}








