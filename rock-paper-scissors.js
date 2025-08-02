let humanScore = 0
let computerScore = 0

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

function getHumanChoice() {
  const input = prompt('Type "rock", "paper", or "scissors"')
  return input
}

