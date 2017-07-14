
var prompt = require('prompt-sync')();
// 
// looping code
// 
var n = prompt('How many more times? ');

// var counter = 1
// while(counter = 1);{
//     console.log(counter);
//     counter++
// }


var money = 1000;
var items = [];


while(money > 99);{
    console.log("you have" + money + "left", "Shirt = 100, Computer = 500");
    var answer = prompt("Which item would you like t buy?");
    if (answer == "Shirt"){
        money -= 100;
        items.push("Shirt") 
        console.log("You bought a shirt");
    }
else if (answer == "Computer"){
    money -= 400;
    items.push("Computer");
    console.log("You bought a computer")
} else{
    console.log("We don't have that")
}
}