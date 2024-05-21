function getComputerChoice()
{
    let innerCC;
    let randomNum = Math.floor(Math.random()*3);
    switch(randomNum)
    {
    case 0: innerCC = "scissors"; break;
    case 1: innerCC = "paper"; break;
    case 2: innerCC = "rock"; break;
    }

    return innerCC;
}

function getHumanChoice()
{
    innerHC = prompt("Rock Paper Scissors! Please pick an option!");
    innerHC = innerHC.toLowerCase();
    while(innerHC != "scissors" && innerHC != "paper" && innerHC != "rock")
    {
        innerHC = prompt("Invalid Option. Please pick between Rock, Paper or Scissors!");
        innerHC = innerHC.toLowerCase();
    }

    return innerHC;
}

let humanScore = 0, computerScore = 0;

function playRound()
{
    let computerChoice, humanChoice, output;

    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    // if human win
    if(computerChoice === "scissors" && humanChoice === "rock" || computerChoice === "rock" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "scissors"){
        output = `You win! ${humanChoice[0].toUpperCase() + humanChoice.slice(1)} beats ${computerChoice[0].toUpperCase() + computerChoice.slice(1)}`;
        humanScore++;
    }

    else if(humanChoice === "scissors" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors"){
        output = `You lose! ${computerChoice[0].toUpperCase() + computerChoice.slice(1)} beats ${humanChoice[0].toUpperCase() + humanChoice.slice(1)}`;
        computerScore++
    }

    else{
        output = `It's a draw!`;
    }
    console.log(output);
}

function playGame()
{
    for (let n = 0; n < 5; n++)
    {
        playRound();
    }

    if(humanScore > computerScore) console.log(`You Win! ${humanScore}:${computerScore}`);
    else if(humanScore < computerScore) console.log(`You lose! ${humanScore}:${computerScore}`);
    else console.log(`It's a draw! ${humanScore}:${computerScore}`);
}

playGame();