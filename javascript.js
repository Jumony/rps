function getComputerChoice()
{
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "ERROR";
    }
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection)
    {
        case "rock":
            if (computerSelection == "rock")
            {
                return "Draw";
            }
            else if (computerSelection == "paper")
            {
                return "You Lose! Paper beats Rock"
            }
            else if (computerSelection == "scissors")
            {
                return "You Win! Rock beats Scissors"
            }
        
        case "paper":
            if (computerSelection == "rock")
            {
                return "You Win! Paper beats Rock"
                break;
            }
            else if (computerSelection == "paper")
            {
                return "Draw"
                break;
            }
            else if (computerSelection == "scissors")
            {
                return "You Lose! Scissors beat Paper"
                break;
            }

        case "scissors":
            if (computerSelection == "rock")
            {
                return "You Lose! Rock beats Scissors"
                break;
            }
            else if (computerSelection == "paper")
            {
                return "You Win! Scissors beat Paper"
                break;
            }
            else if (computerSelection == "scissors")
            {
                return "Draw"
                break;
            }       
    }
}



const rockButton = document.querySelector('.rock-button')
rockButton.addEventListener('click', () => { 
    let computerSelection = getComputerChoice();
    playRound('rock', computerSelection);
});

function playGame()
{
    let playerSelection = prompt("Please enter rock paper or scissors")
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}