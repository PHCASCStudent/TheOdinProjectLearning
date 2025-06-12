const totalRounds = 5;
let humanScore = 0;
let computerScore = 0;
let round = 0;

document.getElementById('choices').style.display = 'none';

function startGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;
    document.getElementById('choices').style.display = 'block';
    document.getElementById('result').textContent = '';
    document.getElementById('score').textContent = `Score - You: 0, Computer: 0`;
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    if (round >= totalRounds) return;
    const computerChoice = getComputerChoice();
    let result = '';
    if (humanChoice === computerChoice) {
        result = `It's a tie! Both chose ${humanChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        result = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    } else {
        computerScore++;
        result = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
    }
    round++;
    document.getElementById('result').textContent = `Round ${round}: ${result}`;
    document.getElementById('score').textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
    if (round === totalRounds) {
        let finalMsg = '';
        if (humanScore > computerScore) {
            finalMsg = 'Congratulations! You win the game!';
        } else if (computerScore > humanScore) {
            finalMsg = 'Sorry! The computer wins the game.';
        } else {
            finalMsg = "It's a tie overall!";
        }
        document.getElementById('result').textContent += `\n${finalMsg}`;
        document.getElementById('choices').style.display = 'none';
    }
}