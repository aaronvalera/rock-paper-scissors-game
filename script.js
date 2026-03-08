// Variables
let humanScore = 0;
let computerScore = 0;

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
const modal = document.querySelector("#modal");
const modalInfo = document.querySelector(".result-card")
const modalTitle = document.querySelector("#modal-title");
const modalFinalScore = document.querySelector("#modal-final-score");
const resetBtn = document.querySelector("#reset-btn");

// Function to get a random rounded integer
const getRandomInt = () => {
   return Math.floor(Math.random() * 3);
}

// Function to get the computer's choice
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
   
   // Function to restart the game
   const restartGame = () => {
      humanScore = 0;
      computerScore = 0;
      
      roundResult.innerHTML = `Choose your Weapon! <br> First to score 5 points wins the game!`;
      humanChoiceHolder.textContent = "❓";
      computerChoiceHolder.textContent = "❓";
      humanCounter.textContent = `Player: ${humanScore}`;
      computerCounter.textContent = `Computer: ${computerScore}`;
   
      modal.classList.add("hidden");
   }
   
   resetBtn.addEventListener("click", restartGame);
   
   // Function to declare the result of the game
   const declareWinner = () => {
      modal.classList.remove("hidden");
      modalFinalScore.textContent = `Score: Player: ${humanScore} - Computer: ${computerScore}`;
    
      if(humanScore > computerScore) {
         modalTitle.textContent = "YOU WON!🏆";
         modalTitle.style.color = "#2ecc71";
         modalInfo.style.boxShadow = "0 0 30px #2ecc71"
      } else if(humanScore === computerScore) {
         modalTitle.textContent = "IT'S A TIE!🤝";
         modalTitle.style.color = "#f1c40f";
         modalInfo.style.boxShadow = "0 0 30px #f1c40f"
      } else {
         modalTitle.textContent = "YOU LOST!💀";
         modalTitle.style.color = "#e74c3c";
         modalInfo.style.boxShadow = "0 0 30px #e74c3c"
      }
   }

// Function to structure a round of the game
const playRound = (humanChoice) => {
   if(humanScore === 5 || computerScore === 5) return;
   roundResult.classList.remove("victory", "defeat", "tie");
   const computerChoice = getComputerChoice();

   if(computerChoice === humanChoice) {
      roundResult.innerHTML = `<h2>It's a tie!</h2>
      <p>${humanChoice} ties with ${computerChoice}.</p>`;
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

      humanCounter.innerHTML = `<p>Player: ${humanScore}</p>`;
      computerCounter.innerHTML = `<p>Computer: ${computerScore}</p>`;

   if(humanScore === 5 || computerScore === 5) {
      declareWinner();
   }
}