var userchoice= "Rock"; choices= ["Rock","Paper","Scissors"];
var compchoice= choices[Math.floor(Math.random()*3)];
console.log("user choice: "+userchoice); console.log("computer choice: "+compchoice);
if (userchoice == compchoice) {Console.log("Tie!")} else if (userchoice == "Rock"){console.log("You Win!");}
if (compchoice == "Paper") {console.log("You Win!")}