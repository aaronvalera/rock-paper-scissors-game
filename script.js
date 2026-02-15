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

// function the get the human's choice
const getHumanChoice = () => {
   let humanChoice = Number(prompt("Rock, Paper or Scissors?"));
   if(humanChoice == 0) {
      console.log("Rock");
         return "Rock";
      } else if(humanChoice == 1) {
         console.log("Paper");
         return "Paper";
      } else {
         console.log("Scissors");
         return "Scissors";
    }
   }
   
   // function to structure the entire game
   const playGame = () => {
      let humanScore = 0;
      let computerScore = 0;
      
      // function to structure a round of the game
      const playRound = (computerChoice, humanChoice) => {
         if(computerChoice === humanChoice) {
            console.log("It's a tie!");
         } else if(
            (computerChoice === "Rock" && humanChoice === "Scissors") ||
               (computerChoice === "Paper" && humanChoice === "Rock") ||
               (computerChoice === "Scissors" && humanChoice == "Paper")
            ) {
               console.log(`You lost! ${computerChoice} beats ${computerChoice}!`);
               computerScore++
            } else {
               console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
               humanScore++
            }
            console.log(`Computer score: ${computerScore}, Human Score: ${humanScore}`);
         }
         
         for (let index = 0; index < 5; index++) {
            const computerSelection = getComputerChoice();
            const humanSelection = getHumanChoice();
         playRound(computerSelection, humanSelection);
         }
                                                   
      // conditional statement to declare the result of the game
      if(humanScore > computerScore) {
         console.log(`You win! Total score:
            Human Score: ${humanScore}, Computer Score: ${computerScore}`);
      } else if(humanScore === computerScore) {
         console.log("It's a tie!")
      } else {
         console.log(`You lost! Total score:
            Human Score: ${humanScore}, Computer Score: ${computerScore}`);
      }
}

playGame();