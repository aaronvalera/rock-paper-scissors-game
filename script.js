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
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
rockBtn.addEventListener("click", () => {
   playRound("Rock");
});
paperBtn.addEventListener("click", () => {
   playRound("Paper");
});
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
   // function to structure the entire game
let humanScore = 0;
let computerScore = 0;
let playedRounds = 0;
const roundResult= document.querySelector("#roundResult");
const finalResult = document.querySelector("#finalResult");

// function to structure a round of the game
const playRound = (humanChoice) => {
   if(playedRounds >= 5) {
      return;
   }
   
   const computerChoice = getComputerChoice();
   if(computerChoice === humanChoice) {
      roundResult.textContent = "It's a tie!";
   } else if(
      (computerChoice === "Rock" && humanChoice === "Scissors") ||
         (computerChoice === "Paper" && humanChoice === "Rock") ||
         (computerChoice === "Scissors" && humanChoice == "Paper")
      ) {
         roundResult.textContent = `You lost! ${computerChoice} beats ${humanChoice}!`;
         computerScore++
      } else {
         roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
         humanScore++
      }
   console.log(`Computer score: ${computerScore}, Human Score: ${humanScore}`);

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