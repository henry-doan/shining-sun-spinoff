angleMode = "degrees";
var backgroundColor = color(135, 206, 250);
var sunColor = color(255, 255, 0);
var sunStrokeColor = color(200, 200, 0);
var sunDiameter = 100;


var drawCloud = function() {
    noStroke();
    fill(255, 255, 255);
    ellipse(0, 0, 126, 97);
    ellipse(60, 0, 70, 60);
    ellipse(-60, 0, 70, 60);
};

var drawSunRay = function() {
    fill(sunColor);
    noStroke();
    triangle(0, 90, -40, 0, 40, 0);
};
var scaleF=1.1;//scale factor

var drawSun = function(X,Y) {
    //draw sun rays
    fill(sunColor);
    stroke(sunStrokeColor);
   
    for (var i=0; i<360; i+=20){
    pushMatrix();
    translate(width/2,height/2);
    rotate(i);
    drawSunRay(i);
    popMatrix();

 

    }

};

//draw background
background(backgroundColor);

//draw sun
 var scaleF=2;//scale factor   
 pushMatrix();
translate(scaleF-width/2,scaleF-height/2);
scale(scaleF);
drawSun();
popMatrix();

//draw clouds
pushMatrix();
translate(47,40);
drawCloud();
popMatrix();

