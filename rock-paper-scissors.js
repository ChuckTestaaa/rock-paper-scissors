console.log('Hello World')

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

