$(document).ready(function() {

//global variables

// the target number the player is trying to match
var random = Math.floor(Math.random() * 101 + 19);

// random numbers for each crystal
var num1 = Math.floor(Math.random() * 11 + 1);
var num2 = Math.floor(Math.random() * 11 + 1);
var num3 = Math.floor(Math.random() * 11 + 1);
var num4 = Math.floor(Math.random() * 11 + 1);

var total = 0;
var wins = 0;
var losses = 0;


$("#target-number").text(random);
$("#wins-counter").text("Wins: " + wins);
$("#losses-counter").text("Losses: " + losses);

function resetGame(){
    random = Math.floor(Math.random() * 101 + 19);
    $("#target-number").text(random);
    num1 = Math.floor(Math.random() * 11 + 1);
    num2 = Math.floor(Math.random() * 11 + 1);
    num3 = Math.floor(Math.random() * 11 + 1);
    num4 = Math.floor(Math.random() * 11 + 1);
    total = 0;
    $("#user-total").text(total);
}

function win(){
    alert("Winner winner chicken dinner!");
    wins++;
    $("#wins-counter").text("Wins: " + wins);
    resetGame();
}

function loss(){
    alert("Overconfidence is a slow and insidious killer, loser!");
    losses++;
    $("#losses-counter").text("Losses: " + losses);
    resetGame();
}

$("#red").on("click", function(){
    total += num1;
    $("#user-total").text(total);
    if (total === random){
        win();
    } else if (total > random){
        loss();
    }
});

$("#green").on("click", function(){
    total += num2;
    $("#user-total").text(total);
    if (total === random){
        win();
    } else if (total > random){
        loss();
    }
});

$("#blue").on("click", function(){
    total += num3;
    $("#user-total").text(total);
    if (total === random){
        win();
    } else if (total > random){
        loss();
    }
});

$("#pink").on("click", function(){
    total += num4;
    $("#user-total").text(total);
    if (total === random){
        win();
    } else if (total > random){
        loss();
    }
});


});
