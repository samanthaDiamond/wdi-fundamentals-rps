////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === "rock" && computerMove === "scissors")  {
        winner = "player";
    } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player";
    } else if (playerMove === "paper" && computerMove === "rock") {
        winner = "player";
    } else if (computerMove === "rock" && playerMove === "scissors") {
        winner = "computer";
    } else if (computerMove === "scissors" && playerMove === "paper") {
        winner = "computer";    
    } else if (computerMove === "paper" && playerMove === "rock") {
        winner = "computer";
    } else {
        winner = "tie";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playMove;
    var computerMove;
    var winner;
    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove("");
        computerMove = getComputerMove("");
        console.log("Player chose " + playerMove + " while computer chose " + computerMove);
        winner = getWinner(playerMove, computerMove);
        if (winner === "tie") {
            console.log("This round is a tie.")
        } else {
            if (winner === "player") {
                playerWins += 1;
            } else {
                computerWins += 1; 
            }
            console.log("The winner of this round is " + winner); 
        }
        console.log("The current score is player: " + playerWins + " vs computer: " + computerWins);
    }
    return [playerWins, computerWins];
}
