let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["stone", "paper", "scissor"];
    const randinx = Math.floor(Math.random() * 3);
    return options[randinx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw...Play Again";
    msg.style.backgroundColor = "rgb(14, 7, 61)";
};

const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win....");
        msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost. ${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
    // generate computer choice
    const compchoice = gencompchoice();

    if (userchoice === compchoice) {
        drawGame();
    } else {
        let userwin = false;
        if (
            (userchoice === "stone" && compchoice === "scissor") ||
            (userchoice === "paper" && compchoice === "stone") ||
            (userchoice === "scissor" && compchoice === "paper")
        ) {
            userwin = true;
        }
        showWinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});
