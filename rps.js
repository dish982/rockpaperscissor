let userScore =0;
let compScore =0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText="Game was Draw. Play again";
    msg.style.backgroundColor="#081B31";
}

const showWinner= (userWin, userChoice, compChoice) => {
     if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText= `You Win! Your ${userChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`You Lost! Computer's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    } else{
        let userWin=true;
        if(userChoice === "Rock") {
            //scissors, paper
            userWin = compChoice === "Paper" ? false : true;
        } else if(userChoice === "Paper") {
            //rock, scissors
            userWin = compChoice === "Scissors" ? false :true;
        } else {
            //rock, paper
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice)
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});
