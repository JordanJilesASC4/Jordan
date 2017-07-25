function setup(){
createCanvas(400, 400);
background(200);
// var tile = 100;
}
var w = 200;
var h = 200;

var row1=("nu", "su", "nu", "nu");
var row2=("nu", "su", "nu", "nu");
var row3=("nu", "nu", "nu", "nu");
var row4=("nu", "nu", "nu", "nu");
var board= [row1, row2, row3, row4];


function draw(){
    // stroke(0);
    var score = 0
    for(var k=0; k<board.length; k++){
        if(board[i][j]=="nu"||board[i][j]=="su"){fill(200);
        }


for(var i=0; i<4; i++){
    rect(i * tile, 0, tile, tile);
     for (var j=0; j<4; j++){rect(0, j * tile, tile, tile);
     }
    


}



//   rect(0, 0, 100, 100);
//   rect(100, 100, 100, 100);
//   rect(0, 100, 100, 100);
//   rect(100, 0, 100, 100);
//   rect(200, 200, 100, 100);
//   rect(200, 0, 100, 100);
//   rect(0, 200, 100, 100);
//   rect(300, 300, 100, 100);
//   rect(0, 300, 100, 100);
//   rect(300, 0, 100, 100);
//   rect(400, 400, 100, 100);
//   rect(0, 400, 100, 100);
//   line(400, 0, 400, 400);
}


    
}

}
fill(100);