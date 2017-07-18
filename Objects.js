function Player(Skill, Shooting, Vision, Athleticsim, Defense){
    this.Name = Name
    this.Skill = Skill;
    this.Shooting = Shooting;
    this.Vision = Vision;
    this.Athleticsim = Athleticsim;
    this.Defense = Defense;
}



var LeBron = new Player("LeBron James", 95, 86, 98, 100, 93);
var Kawhi = new Player("Kawhi Leanord", 85, 80, 72, 92, 100);
var Russ = new Player("Russell Westbrook", 87, 73, 95, 99, 94);
var KD = new Player("Kevin Durant", 94, 91, 75, 84, 83);
var Beard = new Player("James Harden", 98, 95, 96, 83, 75);
var Steph = new Player("Steph Curry", 93, 100, 84, 80, 88);
var Giannis = new Player("Giannis Antetokounmpo", 84, 73, 88, 100, 98);
var Kyrie = new Player("Kyrie Irving", 99, 94, 82, 86, 79);
var Brow = new Player("Anthony Davis", 83, 70, 62, 80, 99);
var Lillard = new Player("Damian Lillard", 89, 91, 91, 91, 88);



var TopTen = [LeBron, Kawhi, Russ, KD, Beard, Steph, Giannis, Kyrie, Brow, Lillard];

function PrintTopTen(TopTen){
    console.log("Printing Top Ten");
    for (var i=0; i<TopTen; i++);
}
