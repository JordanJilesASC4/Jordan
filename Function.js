
function rand(upperBd){
   return(Math.floor(Math.random()*upperBd));
}

function randLetter(){
   var Alphebet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];      
   var Ltr = Alphebet[rand(Alphebet.length)];
    return Ltr;
}

function randWord(){
    var Str = ""
    for(i=0; i<rand(10); i++){
    Str += randLetter();
    return Str;
}
