let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const mssg=document.querySelector("#mssg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice = () =>{
    const options= ["rock","paper","scissors"]
    const randIdx=Math.floor(Math.random()*3)
    return options[randIdx];
};
const drawGame = () => { 
    console.log("match was drawn.");
    mssg.innerText ="Match was drawn."
    mssg.style.backgroundColor="#081b31"
}
const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you won!");
        mssg.innerText ="You win!"
        mssg.style.backgroundColor="green"
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lost!");    
        mssg.innerText ="You lost!"
        mssg.style.backgroundColor="red"
    }
}
const playGame = (userChoice) =>{
    console.log("user choice =",userChoice)
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice ==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice ==="scissors" ? false : true;
        }
        else if(userChoice==="scissors"){
            userWin= compChoice ==="rock" ? false : true;
        }
        showWinner(userWin);
    }
};
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
       playGame(userChoice); 
    });
});