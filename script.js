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
    options.addEventListener("click", (event) => {
        let target = event.target;

        switch(target)
        {
        case "rock": return "rock";
        case "paper": return "paper";
        case "scissors": return "scissors";
        default: return;
        }
    });
}

let humanScore = 0, computerScore = 0;
let results = document.querySelector(".results");
let currentScore = document.querySelector(".currentScore");

function playRound(humanChoice)
{
    let computerChoice, output;

    computerChoice = getComputerChoice();

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

    currentStatus = document.createElement("p");
    currentStatus.textContent = output;

    currentScore.textContent = `${humanScore} : ${computerScore}`
    results.appendChild(currentStatus);

}

let options = document.querySelectorAll(".option");

options.forEach((option) => {
    option.addEventListener("click", (event)=> {

        let target = event.target;

        switch(target.id)
        {
            case "rock": playRound("rock"); break;
            case "paper": playRound("paper"); break;
            case "scissors": playRound("paper"); break;
            default: alert("Warning: Code Broken");
        }
    })
});

options.forEach((option) => {
    option.addEventListener("mouseover", (event) => {
        let target = event.target;

        switch(target.id) {
            case "rock":
            case "paper":
            case "scissors":
                target.style.border = "4px solid gold";
                break;
            default:
                alert("Warning: Code Broken");
        }
    });

    // Add mouseout event listener to reset the border
    option.addEventListener("mouseout", (event) => {
        let target = event.target;
        switch(target.id) {
            case "rock":
            case "paper":
            case "scissors":
                target.style.border = ""; // Reset to default border
                break;
        }
    });
});