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
    // to get a random integer between 19 and 120 
    // Math.floor(Math.random() * (max - min + 1)) + min;
    answer = Math.floor(Math.random() * 102) + 19;
    console.log("computer answer is " + answer);

    jewel1Value = Math.floor(Math.random() * 12) + 1;
    console.log("Jewel 1 is " + jewel1Value);

    jewel2Value = Math.floor(Math.random() * 12) + 1;
    console.log("Jewel 2 is " + jewel2Value);

    jewel3Value = Math.floor(Math.random() * 12) + 1;
    console.log("Jewel 3 is " + jewel3Value);

    jewel4Value = Math.floor(Math.random() * 12) + 1;
    console.log("Jewel 4 is " + jewel4Value);

    // reset userScore
    userScore = 0;

    // jquery - update the display to show new computer score and user score
    $("#answer").text(answer);
    $("#currentscore").text(userScore);

}

// Win or Lose Function
// if player score === answer then add 1 to wins, update #scoreboard by showing "You Won!" #winMessage (hiding #lossMessage) and new win total, and call newRound function
// if player score > answer then add 1 to losses, update #scoreboard by showing "You Lost!" #lossMessage (hiding #winMessage) and new loss total, and call newRound function
// if player score < answer nothing happens (game continues and this is managed by jQuery code in main body) so no code needed for that case
function winLoss() {
    if (userScore === answer) {
        winCount++
        console.log("new winCount is " + winCount);
        $("#lossMessage").hide();
        $("#winMessage").show(300);
        $("#wins").text("Wins: " + winCount);
        newRound();
    }

    else if (userScore > answer) {
        lossCount++
        console.log("new lossCount is " + lossCount);
        $("#winMessage").hide();
        $("#lossMessage").show(300);
        $("#losses").text("Losses: " + lossCount);
        newRound();
    }
    
}



//MAIN CODE BODY

//call the function when page first loads to assign initial answer value and hidden jewel values
newRound();

// hide win and loss messages at beginning of game
$("#winMessage").hide();
$("#lossMessage").hide();

/** For each jewel button: on click (this is jQuery section for page interactions)
 * 1- add jewel value to userScore
 * 2- update display of userScore in scoreboard
 * 3- check if lost or won- call Win or Lose function
**/

// Jewel1-4 on click functions - updating score functionality

$("#jewels").on("click", "#jewel1", function() {
    userScore = jewel1Value + userScore;
    console.log("new userScore is " + userScore);
    $("#currentscore").text(userScore);
    winLoss();


}).on("click", "#jewel2", function() {

    userScore = jewel2Value + userScore;
    console.log("new userScore is " + userScore);
    $("#currentscore").text(userScore);
    winLoss();

}).on("click", "#jewel3", function() {

    userScore = jewel3Value + userScore;
    console.log("new userScore is " + userScore);
    $("#currentscore").text(userScore);
    winLoss();

}).on("click", "#jewel4", function() {

    userScore = jewel4Value + userScore;
    console.log("new userScore is " + userScore);
    $("#currentscore").text(userScore);
    winLoss();

});
