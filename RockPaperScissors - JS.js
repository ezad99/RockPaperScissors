
 

//Randomly outputs either "Rock", "Paper" or "Scissors"
function myComputerChoice()
{   
    let randomNumber = Math.floor(Math.random() * 3)
    let computerChoice;

    switch(randomNumber)
    {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
    }
    console.log(randomNumber)
    return computerChoice;
}

function playOneRound(playerSelection, computerSelection)
{
    let result;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
   
    if (playerSelection == computerSelection)
    {
        console.log ("Player picked: " + playerSelection + " while " + "computer picked " + computerSelection )
        result = "It's a tie"
        return result;
    }

    function findWinner(inputOne, inputTwo, winner){
        if (playerSelection == inputOne && computerSelection == inputTwo){
            console.log ("Player picked: " + playerSelection + " while " + "computer picked " + computerSelection )
            result = winner;
        }
    }

    findWinner("rock", "scissors", "player");
    findWinner("scissors", "paper", "player");
    findWinner("paper", "rock", "player");
    findWinner("scissors", "rock", "computer");
    findWinner("paper", "scissors", "computer");
    findWinner("rock", "paper", "computer");

    return result;

}



function winnerDeclaration(result){
    if (result == "It's a tie")
    {
        console.log(result)
    }
    else
    {
        console.log("The " + result + " won");
    }

}

theWinner = playOneRound("rock", myComputerChoice())
winnerDeclaration(theWinner)


