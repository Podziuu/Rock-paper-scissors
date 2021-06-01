const icons = document.querySelectorAll("[data-choice]");
const playerResult = document.querySelector("#playerScore");
const computerResult = document.querySelector("#computerScore");
const resultsColumn = document.querySelector(".results")

let playerScore = 0;
let computerScore = 0;

icons.forEach(icon => {
    icon.addEventListener("click", function() {
        let winner
        let playerChoice = icon.dataset.choice;
        let computer = computerChoice();
        if(playerChoice === computer) {
            console.log("DRAW!");
        } else if(icon.dataset.beats === computer) {
            console.log("Player Wins!");
            playerScore++;
            winner = 1
        } else {
            console.log('computer wins!');
            computerScore++;
            winner = 2
        }
        updateScores();
        updateResults(playerChoice, computer);
        growIcon(winner);
    })
});

const computerChoice = function() {
    let number = Math.floor((Math.random() * 3) + 1)
    if(number === 1) {
        return 'rock';
    } else if( number === 2 ) {
        return 'paper';
    } else if ( number === 3 ) {
        return 'scissors';
    }
}

const updateScores = function() {
    playerResult.innerHTML = playerScore;
    computerResult.innerHTML = computerScore;
}

function updateResults(player, computer) {
    const resultDiv = document.createElement('div');
    const playerDiv = document.createElement('div');
    const computerDiv = document.createElement('div');
    const playerIcon = whatIcon(player);
    const computerIcon = whatIcon(computer);
    playerDiv.innerHTML = playerIcon;
    computerDiv.innerHTML = computerIcon;
    playerDiv.classList.add('resultIcon')
    computerDiv.classList.add('resultIcon')
    resultDiv.append(playerDiv);
    resultDiv.append(computerDiv);
    console.log(resultDiv);
    resultDiv.classList.add("flexy")
    resultsColumn.prepend(resultDiv);
}

function whatIcon(gamer) {
    if(gamer === 'rock') {
        gamer = '✊'
    } else if (gamer === 'paper') {
        gamer = '✋'
    } else if ( gamer === 'scissors') {
        gamer = '✌'
    }
    return gamer;
}

function growIcon(winner) {
    if(winner === 1) {
        resultsColumn.firstElementChild.firstChild.classList.add("big");
    } else if( winner === 2 ) {
        resultsColumn.firstElementChild.lastChild.classList.add("big");
    }
}