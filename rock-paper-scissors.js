

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

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase()

  switch(humanChoice) {
    case 'rock':
      if(computerChoice === 'paper' ) {
        console.log('You lose! Paper beats Rock')
        computerScore++
      } else if (computerChoice === 'scissors') {
        console.log('You win! Rock beats Scissors')
        humanScore++
      } else {
        console.log("Draw! Rock can't beat Rock")
      }
      break
    case 'paper':
      if(computerChoice === 'rock' ) {
        console.log('You win! Paper beats Rock')
        humanScore++
      } else if (computerChoice === 'scissors') {
        console.log('You lose! Scissors beats Rock')
        computerScore++
      } else {
        console.log("Draw! Paper can't beat Paper")
      }
      break
    case 'scissors':
      if(computerChoice === 'rock' ) {
        console.log('You lose! Rock beats Scissors')
        computerScore++
      } else if (computerChoice === 'paper') {
        console.log('You win! Scissors beats Paper')
        humanScore++
      } else {
        console.log("Draw! Scissors can't beat Scissors")
      }
      break

    default:
      console.log("Invalid values")
  }
}




function playGame() {
  let humanScore = 0
  let computerScore = 0

  const rounds = 5
  for(let i = 0; i < rounds; i++) {
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection)
  }

  if(humanScore > computerScore) {
    console.log('You win!')
  } else if (humanScore < computerScore) {
    console.log('You lose!')
  } else {
    console.log('Draw!')
  }
}

