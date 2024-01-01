let userScore = 0;
let computerScore = 0;

let choice = document.querySelectorAll(".choice")//html hote choice class er shob elemnt k array akare ekahnkar choice e save thakbe as an array
const msg = document.querySelector("#msg")
let userScorePara = document.querySelector("#user-score")
let compScorePara = document.querySelector("#computer-score")

const winOrLose = (userwin, userchoice, compChoice) => {
    if (userwin)//userwin jodi true ase tahole jitso
    {
        userScore++
        console.log(`You won! your ${userchoice} beat ${compChoice}`)
        msg.innerText = `(computer: ${compChoice})  You won! `
        userScorePara.innerText = `${userScore}`
        msg.style.backgroundColor = "#00800054";
        msg.style.boxShadow = "0px 2px 24px 3px #008000c9";
    }
    else {
        computerScore++
        console.log(`You lose :( ${compChoice} beat your ${userchoice}`)
        msg.innerText = `(computer: ${compChoice})  You lose :(`
        compScorePara.innerText = `${computerScore}`
        msg.style.backgroundColor = "#ff00004a";
        msg.style.boxShadow = "0px 2px 24px 3px #ff00009e";
    }
}


const matchdraw = (userchoice, compChoice) => {
    console.log("The match is draw.")
    msg.innerText = `(computer: ${compChoice}) Match Tie.`
    msg.style.backgroundColor = "#ff5db575";
    msg.style.boxShadow = "0px 2px 24px 3px #ff75d2";

}



//userchoice er por computer ekkta generate korbe

const compGenerate = () => {
    const option = ["rock", "paper", "scissors"]
    let index = Math.floor(Math.random() * 3) //randomly  0-2 er moddhe kono number generate korbe
    return option[index]//random theke generate hoa index ta te ki elemnt ase option array te ta retun korbe playgame er jekhan theke call dea hoisilo

}


const playgame = (userchoice) => {
    console.log(`you clicked ${userchoice}`)
    //computer generate korbe
    const compChoice = compGenerate(); //ekhane return option[index] theke value asthese ja compchoice e store kortesi
    console.log(`computer generated ${compChoice}`)

    if (userchoice === compChoice) {
        matchdraw(userchoice, compChoice);
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            //computer will choose paper,scissors
            userwin = compChoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            //computer will choose rock,scissors
            userwin = compChoice === "scissors" ? false : true;
        }
        else {
            //computer will choose rock,paper //you choose scissors
            userwin = compChoice === "rock" ? false : true;

        }

        console.log(userwin)
        winOrLose(userwin, userchoice, compChoice)
    }
}



choice.forEach((choiceItem) =>//choiceItem varible er maddhome choice array er prtita elemnet access kora hocche
{
    choiceItem.addEventListener("click", () =>//choiceitem holo ekek ta elemnet  jate click kora hole nicher sattement gula kaj korbe
    {
        let userchoice = choiceItem.getAttribute("id")//user kono ekta choose korlo

        playgame(userchoice);
    })

}

)