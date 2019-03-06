$(document).ready(function() {

//global variables

// the target number the player is trying to match
var random = Math.floor(Math.random() * 101 + 19);
console.log(random);

// random numbers for each crystal
var num1 = Math.floor(Math.random() * 11 + 1);
var num2 = Math.floor(Math.random() * 11 + 1);
var num3 = Math.floor(Math.random() * 11 + 1);
var num4 = Math.floor(Math.random() * 11 + 1);

var total = 0;
var wins = 0;
var losses = 0;


$("#target-number").append(random);
$("#wins-counter").append(wins);
$("#losses-counter").append(losses);

function resetGame(){
    random = Math.floor(Math.random() * 101 + 19);
    console.log(random);
    $("#target-number").append(random);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    total = 0;
    $("#user-total").append(total);
}

function win(){
    alert("Winner winner chicken dinner!");
    wins++;
    $("#wins-counter").append(wins);
    resetGame();
}

function loss(){
    alert("Overconfidence is a slow and insidious killer, loser!");
    loses++;
    $("#losses-counter").append(losses);
    resetGame();
}




});
