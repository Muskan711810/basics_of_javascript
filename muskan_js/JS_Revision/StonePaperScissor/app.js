let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const gencompchoice = () =>{
    const options = ["stone","paper","scissor"];
    const randinx = Math.floor(Math.random() * 3);
    return options[randinx];
};

const drawGame= () => {
    console.log("game was draw.");
};

const playGame = (userchoice) => {
    console.log("user choice", userchoice);
    //generate computer choice
    const compchoice = gencompchoice;
    console.log("comp choice", compchoice);
};

if (userscore === compscore){
    drawGame();
}else{
    let userwin = true;
    if(userchoice === "stone"){
        //paper scissors,
        userwin = 
    }
}

choices.forEach ((choice)=> {
    choice.addEventListner("click", () => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});