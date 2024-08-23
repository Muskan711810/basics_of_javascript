let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencompchoice = () =>{
    const options = ["stone","paper","scissor"];
    const randinx = Math.floor(Math.random() * 3);
    return options[randinx];
};

const drawGame= () => {
    console.log("game was draw.");
    msg.innerText("Game was Draw...Play Again")
};

const showWinner = (userwin) => {
    if(userwin){
        console.log("you win....");
         msg.innerText = "You Win..."
    }else {
        console.log("you lose...");
         msg.innerText = "You Lose..."
    }
};

const playGame = (userchoice) => {
    console.log("user choice", userchoice);
    //generate computer choice
    const compchoice = gencompchoice;
    console.log("comp choice", compchoice);

if (userchoice === compchoice){
    drawGame();
} else {
    let userwin = true;
    if(userchoice === "stone"){
        //paper scissors,
        userwin = compchoice ==="paper" ? false : true;
    } else if (userchoice ==="paper"){
        //stone scissors
        userwin = compchoice ==="scissor" ? false : true;
    } else{
        userwin = compchoice ==="stone" ?false : true;
    }
    showWinner();
    }
};


choices.forEach ((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});