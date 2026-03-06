// Variables
let humanScore = 0;
let computerScore = 0;
let playedRounds = 0;

// Button selectors
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
   playRound("Rock");
   humanChoiceHolder.textContent = "💎";
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
   playRound("Paper");
   humanChoiceHolder.textContent = "📄";
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
   playRound("Scissors");
   humanChoiceHolder.textContent = "✂️";
});

// Text selectors
const humanChoiceHolder = document.querySelector(".player-choice");
const computerChoiceHolder = document.querySelector(".computer-choice")
const roundResult = document.querySelector("#roundResult");
const finalResult = document.querySelector("#finalResult");
const humanCounter = document.querySelector(".playerScore");
const computerCounter = document.querySelector(".computerScore");

// function to get a random rounded integer
const getRandomInt = () => {
   return Math.floor(Math.random() * 3);
}

// function to get the computer's choice
const getComputerChoice = () => {
   let computerChoice = getRandomInt();
     if(computerChoice == 0) {
        computerChoiceHolder.textContent = "💎";
        return "Rock";
      } else if(computerChoice == 1) {
         computerChoiceHolder.textContent = "📄";
         return "Paper";
    } else {
         computerChoiceHolder.textContent = "✂️";
         return "Scissors";
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

// function to structure a round of the game
const playRound = (humanChoice) => {
   if(humanScore === 5 || computerScore === 5) return;

   roundResult.classList.remove("victory", "defeat", "tie");

   const computerChoice = getComputerChoice();
   if(computerChoice === humanChoice) {
      roundResult.innerHTML = "<h2>It's a tie!</h2>";
      roundResult.classList.add("tie");
   } else if(
      (computerChoice === "Rock" && humanChoice === "Scissors") ||
      (computerChoice === "Paper" && humanChoice === "Rock") ||
      (computerChoice === "Scissors" && humanChoice == "Paper")
   ) {
         roundResult.innerHTML = `<h2>You lost!</h2>
         <p>${computerChoice} beats ${humanChoice}!</p>`;
         roundResult.classList.add("defeat");
         computerScore++;
      } else {
         roundResult.innerHTML = `<h2>You win!</h2>
         <p>${humanChoice} beats ${computerChoice}!</p>`;
         roundResult.classList.add("victory");
         humanScore++;
      }

      playedRounds++;

      humanCounter.innerHTML = `<p>Player: ${humanScore}</p>`;
      computerCounter.innerHTML = `<p>Computer: ${computerScore}</p>`;

   if(humanScore === 5 || computerScore === 5) {
      declareWinner();
   }
}