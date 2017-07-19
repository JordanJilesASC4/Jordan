function setup(){
createCanvas(1000, 1000);
background(200);
}

function mouseDragged(){
    fill(random(255),random(255), random(255));
    var radius = random(200);
    var shapeNum = random(2);
    ellipse(mouseX, mouseY, radius);
    rect(mouseX - radius, MouseY - radius,);
if (ShapNum == 0){ellipse(mouseX, mouseY, radius, radius)}
else{rect(mouseX - radius, mouseY - radius, radius, radius)}
}

