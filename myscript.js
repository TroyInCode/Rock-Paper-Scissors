        //**Create a function called getComputerChoice that will randomly return rock,"paper, or scissors**
        //Declare any variables for rock,"paper, scissors game
        const textArray = ["Rock", "Paper", "Scissors"];
        let computerScore = 0;
        let userScore = 0;
        let roundsPlayed = 0;
        //Create a function and name it getComputerChoice
        function getComputerChoice (){
             return textArray[Math.floor(Math.random()* textArray.length)];
        }
        let playerSelection = " ";
        const computerSelection = getComputerChoice();
        
      
        //**Create a function that plays a single round of rock,"paper, scissors that takes two parameters
        //Create a function that accepts two parameters (Users Input and Computers Input)
         function playRound (playerSelection, computerSelection) {
                document.getElementById("scoremessage").textContent = "";
                document.getElementById("gamecomplete").textContent = "";

                if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
                    document.getElementById("scoremessage").textContent = "This round is a draw!";
                     computerScore++;
                     userScore++;
                } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
                    document.getElementById("scoremessage").textContent = "You lose this round! Rock beats Scissors!";
                     computerScore++;
                } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
                    document.getElementById("scoremessage").textContent = "You win this round! Scissors beats Paper!";
                     userScore++;
                } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
                    document.getElementById("scoremessage").textContent = "You lose this round! Paper beats Rock!";
                     computerScore++;
                } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
                    document.getElementById("scoremessage").textContent = "You win this round! Rock beats Scissors!";
                     userScore++;
                } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
                    document.getElementById("scoremessage").textContent = "You win this round! Paper beats Rock!";
                     userScore++;
                } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
                    document.getElementById("scoremessage").textContent = "You lose this round! Scissors beats Paper!";
                     computerScore++;
                } else {
                    document.getElementById("scoremessage").textContent = "Your choice is invalid. Please enter rock, paper, or scissors";
                }  

                //Increment roundsPlayed after each round//
                roundsPlayed++;
                
                if (roundsPlayed === 5) {
                  fiveRounds();
                  userScore = 0;
                  computerScore = 0;
                  roundsPlayed = 0;
                  return userScore && computerScore;
                }

                
                  //Display scores after each round//
                  playerScoreDiv = document.getElementById("playerscore");
                  playerScoreDiv.textContent = + userScore;
                  compScoreDiv = document.getElementById("compscore");
                  compScoreDiv.textContent = + computerScore;

        }


 
        //Displays a message after five rounds are played//
        function fiveRounds() {
                
               //Declare a winner or loser at the end of five rounds//      
               if (computerScore > userScore) {
                    document.getElementById("gamecomplete").textContent = "Sorry, you lost the game...";
                } else if (userScore > computerScore) {
                    document.getElementById("gamecomplete").textContent = "Congratulations, you won the game!";
                } else if (userScore === computerScore) {
                    document.getElementById("gamecomplete").textContent = "Its a draw! Both players win!";
                }
                
                
        }
        
       

        //Event Listeners for Button Clicks//
        document.getElementById("rockbtn").addEventListener("click", function() {
          playerSelection = "Rock";
          playRound(playerSelection, getComputerChoice());
          

        });
        document.getElementById("paperbtn").addEventListener("click", function () {
          playerSelection = "Paper";
          playRound(playerSelection, getComputerChoice());

          
        });
        document.getElementById("scissorsbtn").addEventListener("click", function () {
          playerSelection = "Scissors";
          playRound(playerSelection, getComputerChoice());

        });