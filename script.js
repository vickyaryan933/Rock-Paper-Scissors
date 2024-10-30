let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#myMsg");

let u_score = document.querySelector("#user-score");
let c_score = document.querySelector("#comp-score");

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        drawGame();
    } else {
        const userWin =
            (userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper");

        showWinner(userWin, computerChoice, userChoice);
    }
};

const drawGame = () => {
    console.log("It's a tie!!");
    msg.innerText = "It's a Tie!";
};

const showWinner = (userWin, computerChoice, userChoice) => {
    if (userWin) {
        userScore++;
        u_score.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
    } else {
        compScore++;
        c_score.innerText = compScore;
        console.log("Computer wins!");
        msg.innerText = `You Lose! ${computerChoice} beats ${userChoice}`;
    }
};

const playGame = (userChoice) => {
    console.log("User choice: ", userChoice);
    const computerChoice = getComputerChoice();
    console.log("Computer choice: ", computerChoice);
    determineWinner(userChoice, computerChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
