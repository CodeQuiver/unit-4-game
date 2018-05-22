// VARIABLES
// ====================================================================
// create variables for tracking the number of wins, losses
var winCount = 0;
var lossCount = 0;

// create variables for computer answer and user score
var answer = 0;
var userScore = 0;

//create variables for value of each gem
var jewel1Value = 0;
var jewel2Value = 0;
var jewel3Value = 0;
var jewel4Value = 0;


//FUNCTIONS
// =========================================

// New Round Function:
// computer selects random number for answer also assigns jewel values - this function will be called whenever a round ends to start the next round
//userScore is also reset at beginning of new round
function newRound() {
    answer = Math.floor(Math.random() * 50);
    console.log("computer answer is " + answer);

    jewel1Value = Math.floor(Math.random() * 10);
    console.log("Jewel 1 is " + jewel1Value);

    jewel2Value = Math.floor(Math.random() * 10);
    console.log("Jewel 2 is " + jewel2Value);

    jewel3Value = Math.floor(Math.random() * 10);
    console.log("Jewel 3 is " + jewel3Value);

    jewel4Value = Math.floor(Math.random() * 10);
    console.log("Jewel 4 is " + jewel4Value);
}

// Win or Lose Function
// if player score = answer then add 1 to wins and call newRound function
// if player code > answer then add 1 to losses and call newRound function
// if player score < answer nothing happens (game continues) so no code needed for that case
function winLoss(userScore, answer) {
    
}





//MAIN CODE BODY

//call the function when page first loads to assign initial answer value and hidden jewel values
newRound();

/** For each jewel button: on click
 * 1- add jewel value to userScore
 * 2- update display of userScore in scoreboard
 * 3- check if lost or won- call Win or Lose function
**/
