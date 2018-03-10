//get random values for 4 different crystals
// when you click on the crystal add that random value to your score
// compare your score agains the target score
//if your score is over the target score reset the crystal values and the targe score
//if your score is equal to the targe score you win and reset the crystal values and the target score


var wins = 0;
var losses = 0;
var score = 0;
var numberToGuess = 0;



var randomNumberToGuess = Math.floor(Math.random() * 80) + 20;


var randomNumber1 = Math.floor(Math.random() * 12) + 1;
var randomNumber2 = Math.floor(Math.random() * 12) + 1;
var randomNumber3 = Math.floor(Math.random() * 12) + 1;
var randomNumber4 = Math.floor(Math.random() * 12) + 1;

document.getElementById("playerPoints").innerHTML = score;

document.getElementById("wins").innerHTML = wins;

document.getElementById("losses").innerHTML = losses;

var numberGenerator = function ()  { 
    numberToGuess = randomNumberToGuess
    document.getElementById("randomNumber").innerHTML = numberToGuess;



if (numberToGuess === score)    {
    wins++;
    alert("You got it!");
}

else if (numberToGuess < score) {
    losses++;
    score = 0;
}
};


function addPoints1()    {
    score = randomNumber1 + score;
    document.getElementById("playerPoints").innerHTML = score
}

function addPoints2()    {
    score = randomNumber2 + score;
    document.getElementById("playerPoints").innerHTML = score
}

function addPoints3()    {
    score = randomNumber3 + score;
    document.getElementById("playerPoints").innerHTML = score
}

function addPoints4()    {
    score = randomNumber4 + score;
    document.getElementById("playerPoints").innerHTML = score
}
