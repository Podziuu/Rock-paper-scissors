const icons = document.querySelectorAll("[data-choice]");
const playerResult = document.querySelector("#playerScore");
const computerResult = document.querySelector("#computerScore");
const playerColumn = document.querySelector(".playerResult");
const computerColumn = document.querySelector(".computerResult");

let playerScore = 0;
let computerScore = 0;

icons.forEach(icon => {
    icon.addEventListener("click", function() {
        let winner = ''
        let playerChoice = icon.dataset.choice;
        let computer = computerChoice();
        if(playerChoice === computer) {
            console.log("DRAW!");
        } else if(icon.dataset.beats === computer) {
            console.log("Player Wins!");
            playerScore++;
            winner = playerColumn
        } else {
            console.log('computer wins!');
            computerScore++;
            winner = computerColumn;
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
    const playerDiv = document.createElement('div');
    const computerDiv = document.createElement('div');
    const playerIcon = whatIcon(player);
    const computerIcon = whatIcon(computer);
    playerDiv.innerHTML = playerIcon;
    computerDiv.innerHTML = computerIcon;
    playerColumn.prepend(playerDiv);
    computerColumn.prepend(computerDiv);
}

function whatIcon(gamer) {
    if(gamer === 'rock') {
        gamer = '<i class="resultIcon fas fa-hand-rock"></i>'
    } else if (gamer === 'paper') {
        gamer = '<i class="resultIcon fas fa-hand-paper"></i>'
    } else if ( gamer === 'scissors') {
        gamer = '<i class="resultIcon fas fa-hand-scissors"></i>'
    }
    return gamer;
}

function growIcon(winner) {
    winner.firstElementChild.firstElementChild.classList.add("big");
}