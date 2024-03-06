let playerScore = 0;
let computerScore = 0;
let rounds = 0;
const scoreTracker = document.createElement('span');
document.body.appendChild(scoreTracker);

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

    rounds++;
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
                computerScore++;
                return "You Lose! Paper beats Rock"
            }
            else if (computerSelection == "scissors")
            {
                playerScore++;
                scoreTracker.textContent = playerScore;
                return "You Win! Rock beats Scissors"
            }
        
        case "paper":
            if (computerSelection == "rock")
            {
                playerScore++;
                scoreTracker.textContent = playerScore;
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
                computerScore++;
                return "You Lose! Scissors beat Paper"
                break;
            }

        case "scissors":
            if (computerSelection == "rock")
            {
                computerScore++;
                return "You Lose! Rock beats Scissors"
                break;
            }
            else if (computerSelection == "paper")
            {
                playerScore++;
                scoreTracker.textContent = playerScore;
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





const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button')


rockButton.addEventListener('click', () => { 
    if (rounds === 4 && playerScore > computerScore)
    {
        const winnerText = document.createElement('p');
        winnerText.textContent = "You Win!"
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
        document.body.appendChild(winnerText);
    }
    else if (rounds === 4 && playerScore < computerScore)
    {
        const winnerText = document.createElement('p');
        winnerText.textContent = "You Lose!";
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
        document.body.appendChild(winnerText);
    }
    else if (rounds === 4 && playerScore === computerScore)
    {
        const winnerText = document.createElement('p');
        winnerText.textContent = "You both have the same score!";
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
        document.body.append(winnerText);
    }
    else
    {
        const container = document.createElement('div');
        let computerSelection = getComputerChoice();
        container.textContent = playRound('rock', computerSelection);
        document.body.appendChild(container);
        
    }

});

paperButton.addEventListener('click', () => {
    if (rounds === 4 && playerScore > computerScore)
    {
        const winnerText = document.createElement('p');
        winnerText.textContent = "You Win!"
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
        document.body.appendChild(winnerText);
    }
    else if (rounds === 4 && playerScore < computerScore)
    {
        const winnerText = document.createElement('p');
        winnerText.textContent = "You Lose!";
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
        document.body.appendChild(winnerText);
    }
    else if (rounds === 4 && playerScore === computerScore)
    {
        const winnerText = document.createElement('p');
        winnerText.textContent = "You both have the same score!";
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
        document.body.append(winnerText);
    }
    else
    {
        const container = document.createElement('div');
        let computerSelection = getComputerChoice();
        container.textContent = playRound('paper', computerSelection);
        document.body.appendChild(container);
    }

})

scissorsButton.addEventListener('click', () => {
    if (rounds === 4 && playerScore > computerScore)
    {
        const winnerText = document.createElement('p');
        winnerText.textContent = "You Win!"
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
        document.body.appendChild(winnerText);
    }
    else if (rounds === 4 && playerScore < computerScore)
    {
        const winnerText = document.createElement('p');
        winnerText.textContent = "You Lose!";
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
        document.body.appendChild(winnerText);
    }
    else if (rounds === 4 && playerScore === computerScore)
    {
        const winnerText = document.createElement('p');
        winnerText.textContent = "You both have the same score!";
        rounds = 0;
        playerScore = 0;
        computerScore = 0;
        document.body.append(winnerText);
    }
    else
    {
        const container = document.createElement('div');
        let computerSelection = getComputerChoice();
        container.textContent = playRound('scissors', computerSelection);
        document.body.appendChild(container);
    }

})


