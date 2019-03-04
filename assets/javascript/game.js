$(document).ready(function() {

//global variables

// the target number the player is trying to match
var random = Math.floor(Math.random()*101 + 19);
console.log(random);

// random numbers for each crystal
var num1 = Math.floor(Math.random()*11 + 1);
var num2 = Math.floor(Math.random()*11 + 1);
var num3 = Math.floor(Math.random()*11 + 1);
var num4 = Math.floor(Math.random()*11 + 1);

var total = 0;
var wins = 0;
var losses = 0;


$("#targetNumber").append(random);




});
