// function to get a random rounded integer
const getRandomInt = () => {
   return Math.floor(Math.random() * 3);
}

// function to get the computer's choice
const getComputerChoice = () => {
   let computerChoice = getRandomInt();
     if(computerChoice == 0) {
         console.log("Rock");
         return "Rock";
      } else if(computerChoice == 1) {
         console.log("Paper");
         return "Paper";
    } else {
         console.log("Scissors");
         return "Scissors";
    }
}

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
   playRound("Rock");
});
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
   playRound("Paper");
});
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
   playRound("Scissors");
});

// function the get the human's choice
const getHumanChoice = () => {
   if(humanChoice1 == "Rock") {
      console.log("Rock");
         return "Rock";
      } else if(humanChoice2 == "Paper") {
         console.log("Paper");
         return "Paper";
      } else {
         console.log("Scissors");
         return "Scissors";
    }
   }

let humanScore = 0;
let computerScore = 0;
let playedRounds = 0;
const roundResult= document.querySelector("#roundResult");
const finalResult = document.querySelector("#finalResult");
const playerCounter = document.querySelector(".playerScore");
const computerCounter = document.querySelector(".computerScore");

// function to structure a round of the game
const playRound = (humanChoice) => {
   if(playedRounds >= 5) {
      return;
   }

   playerCounter.innerHTML = `<p>Player: ${humanScore}</p>`;
   computerCounter.innerHTML = `<p>Computer: ${computerScore}</p>`;
   
   const computerChoice = getComputerChoice();
   if(computerChoice === humanChoice) {
      roundResult.innerHTML = "<h2>It's a tie!</h2>";
   } else if(
      (computerChoice === "Rock" && humanChoice === "Scissors") ||
         (computerChoice === "Paper" && humanChoice === "Rock") ||
         (computerChoice === "Scissors" && humanChoice == "Paper")
      ) {
         roundResult.innerHTML = `<h2>You lost!</h2>
         <p>${computerChoice} beats ${humanChoice}!</p>`;
         computerScore++;
      } else {
         roundResult.innerHTML = `<h2>You win!</h2>
         <p>${humanChoice} beats ${computerChoice}!</p>`;
         humanScore++;
      }

   playedRounds++;

   if(playedRounds === 5) {
      declareWinner();
   }
}
                           
   // conditional statement to declare the result of the game
   const declareWinner = () => { 
      if(humanScore > computerScore) {
         finalResult.textContent = `You win! Final score:
            Human Score: ${humanScore} - Computer Score: ${computerScore}`;
      } else if(humanScore === computerScore) {
         finalResult.textContent = `The game is a tie! Final score:
            Human ${humanScore} - Computer ${computerScore}`;
      } else {
         finalResult.textContent = `You lost! Final score:
            Human Score: ${humanScore} - Computer Score: ${computerScore}`;
      }
   }