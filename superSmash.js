var prompt = require('prompt-sync')();
var mashArray = ["Dream Land", "Yoshi's Island", "Kanto", "Mushroom Kingdom"];
var firstQuestion = [32 , 7];
var secondQuestion = ["Mario", "Yoshi"];

function rand(upperBd){
   return(Math.floor(Math.random()*upperBd));
}

function Smash(mashArray, firstQuestion, secondQuestion){
var answer = prompt("How many times will you strike?");
firstQuestion.push(answer)
console.log("You have chosen to strike " + answer + " times")

var answer2 = prompt("Who will you choose to fight? ");
secondQuestion.push(answer2)
console.log("You have chosen " + answer2)

var answer3 = prompt('Where do you wish to fight ')
mashArray.push(answer3)
console.log("You have chosen to fight at " + answer3 + ".")

}

function fight(){
    Smash(mashArray, firstQuestion, secondQuestion)
    console.log("You fought " + secondQuestion[2] + " in the " + mashArray[4] + " and hit them " + firstQuestion[2] , "times. ");
}
fight()

function winner(){
    for(var i = 0; i < 20)
}