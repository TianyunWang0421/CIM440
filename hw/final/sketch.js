var parkImage;
var signImage;
var chessImage;
var ropeImage;
var seesawImage;
var birdImage;

var stretchy;
var face;

var signClick;
var swingClick;
var slideClick;
var chessClick;
var ropeClick;
var seesawClick;

var balloonX = [];
var balloonY = [];
var balloonAmount = 30;
var balloonImage;

var swingShow = false;
var slideShow = false;
var chessShow = false;
var ropeShow = false;
var seesawShow = false;

var slideVid;
var chessVid;

var birdX = 265;
var birdY = 105;
var birdW = 20;
var birdH = 20;

function preload(){
  parkImage = loadImage("images/park.png");
  signImage = loadImage("images/sign.png");
  chessImage = loadImage("images/chess.png");
  ropeImage = loadImage("images/rope.png");
  seesawImage = loadImage("images/seesaw.png");
  birdImage = loadImage("images/bird.png");

  balloonImage = loadImage("images/balloon.png");

  chessVid = createVideo("images/chessvid.mp4");
  slideVid = createVideo("images/slidevid.mp4");

} //end of preload

function setup() {
  // put setup code here
  var cnv = createCanvas(1000,600);
  cnv.id("mycanvas");

  var container0 = createDiv();
  container0.id("container0");
  select("#container0").html("<h1>HAPPYGROUND</h1>");
  select("#container0").style("color", "white");
  select("#container0").style("text-align", "center");
  select("#container0").style("width", "1020px");
  select("#container0").style("margin", "auto auto");
  cnv.parent("#container0");
  select('body').style("background-color", "#99D3DF");

  for(var i = 10; i < balloonAmount; i++){
    balloonX[i] = random(0,1000);
    balloonY[i] = random(height, height + 300);
  }
  console.log("balloonX" + balloonX);
  console.log("balloonY" + balloonY);

  face = loadImage('play/examples/assets/asterisk_explode0008.png');
  stretchy = createSprite();
  stretchy.draw = function() {
    fill("LightPink");
    push();
    rotate(radians(this.getDirection()));
    ellipse(0, 0, 80+this.getSpeed(), 80-this.getSpeed());
    pop();
    image(face, this.deltaX*2, this.deltaY*2);
  };
  stretchy.maxSpeed = 10;

  signClick = new Clickable();
  signClick.locate(430,485);
  signClick.resize(120,30);
  signClick.onHover = function(){
  this.color = "SaddleBrown";
  this.text = "PLAYGROUND RULES";
  this.textColor = "white";
  }
  signClick.onOutside = function(){
  this.color = "NavajoWhite";
  this.text = " Hello My Friend";
  this.textColor = "black";
  }
  signClick.onPress = function(){
    alert("Click OK to see PLAYGROUND RULES");
    alert("PLAYGROUND RULES: Use playground at own risk. Children under the age of 12 must be accompanied by an adult. No glass or alcoholic beverages. Proper footwear required. Improper use of equipment prohibited. Playground hours from 8:00 am to 7:30 pm. ");
  }

  swingClick = new Clickable();
  swingClick.locate(120,350);
  swingClick.resize(60,20);
  swingClick.onHover = function(){
  this.color = "Maroon";
  this.text = "SWING";
  this.textColor = "white";
  }
  swingClick.onOutside = function(){
  this.color = "white";
  this.text = "★";
  this.textColor = "black";
  }
  swingClick.onPress = function(){
    if(swingShow == true){
      swingShow = false;
    }else{
      swingShow = true;
    }
  }

  slideClick = new Clickable();
  slideClick.locate(440,90);
  slideClick.resize(60,20);
  slideClick.onHover = function(){
  this.color = "Maroon";
  this.text = "SLIDES";
  this.textColor = "white";
  }
  slideClick.onOutside = function(){
  this.color = "white";
  this.text = "★";
  this.textColor = "black";
  }
  slideClick.onPress = function(){
    if(slideShow == true){
      slideShow = false;
      slideVid.hide();
    }else{
      slideShow = true;
    }
  }

  chessClick = new Clickable();
  chessClick.locate(753,405);
  chessClick.resize(60,20);
  chessClick.onHover = function(){
  this.color = "Maroon";
  this.text = "CHESS";
  this.textColor = "white";
  }
  chessClick.onOutside = function(){
  this.color = "white";
  this.text = "★";
  this.textColor = "black";
  }
  chessClick.onPress = function(){
    if(chessShow == true){
      chessShow = false;
      chessVid.hide();
    }else{
      chessShow = true;
    }
  }

  ropeClick = new Clickable();
  ropeClick.locate(660,330);
  ropeClick.resize(80,40);
  ropeClick.onHover = function(){
  this.color = "Maroon";
  this.text = "JUMPING ROPES";
  this.textColor = "white";
  }
  ropeClick.onOutside = function(){
  this.color = "white";
  this.text = "★";
  this.textColor = "black";
  }
  ropeClick.onPress = function(){
    if(ropeShow == true){
      ropeShow = false;
    }else{
      ropeShow = true;
    }
  }

  seesawClick = new Clickable();
  seesawClick.locate(410,375);
  seesawClick.resize(65,20);
  seesawClick.onHover = function(){
  this.color = "Maroon";
  this.text = "SEESAW";
  this.textColor = "white";
  }
  seesawClick.onOutside = function(){
  this.color = "white";
  this.text = "★";
  this.textColor = "black";
  }
  seesawClick.onPress = function(){
    if(seesawShow == true){
      seesawShow = false;
    }else{
      seesawShow = true;
    }
  }

  chessVid.hide();
  slideVid.hide();

} //end of setup

function draw() {
  // put drawing code here
  background("#D3F5F2");

  image(parkImage, 20,0, parkImage.width/2, parkImage.height/2);
  image(signImage, 410,460, signImage.width/4, signImage.height/4);
  image(chessImage, 720,420, chessImage.width/10, chessImage.height/10);
  image(ropeImage, 580,220, ropeImage.width/4, ropeImage.height/4);
  image(seesawImage, 320,330, seesawImage.width/5, seesawImage.height/5);

  if(mouseX > birdX && mouseX < birdX+birdW && mouseY > birdY && mouseY < birdY+birdH){
    console.log("In rectangle");
    text("Birds, also known as Aves or avian dinosaurs, are a group of endothermic vertebrates, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.", 30,10,150,200);
  }
  fill("black");
  text("This is a BIRD!", birdX-5, birdY-15);
  fill("white");
  rect(birdX,birdY,birdW,birdH);

  image(birdImage, 220,90, birdImage.width/6, birdImage.height/6);

  stretchy.velocity.x = (mouseX-stretchy.position.x)/10;
  stretchy.velocity.y = (mouseY-stretchy.position.y)/10;
  drawSprites();

  if(swingShow == true){
    rect(15,40,145,300);
    text("Kids should always sit in the swing, not stand or kneel. They should hold on tightly with both hands while swinging, and when finished swinging, stop the swing completely before getting off. Children should stay a safe distance from other kids on swings, being careful not to run or walk in front of or in back of moving swings. Kids should never ride with more than one child to a swing. Swings are designed to safely hold only one person. ", 20,50,140,305);
  }

  if(slideShow == true){
    rect(260,8,280,77);
    text("Kids should always slide down feet first and sitting up, never head first or on their back or stomach. Only one child should be on the slide platform at a time, and kids shouldn't slide down in groups. Kids should always check that the bottom of the slide is clear before sliding down. ", 265,12,275,80);
    slideVid.show();
    slideVid.play();
    slideVid.size(220,230);
    slideVid.position(640,35);
  }

  if(chessShow == true){
    rect(790,420,205,165);
    text("The player controlling the white pieces is named 'White'; the player controlling the black pieces is named 'Black'. White moves first, then players alternate moves. Making a move is required; it is not legal to skip a move, even when having to move is detrimental. Play continues until a king is checkmated, a player resigns, or a draw is declared. ", 795,430,200,170);
    chessVid.show();
    chessVid.play();
    chessVid.size(240,230);
    chessVid.position(850,300);
  }

  if(ropeShow == true){
    rect(580,375,135,205);
    text("In speed events, a jumper alternates their feet with the rope going around the jumper every time one of their feet hit the ground for 30 seconds, one minute, or three minutes. The jumper is judged on the number of times the right foot touches the ground in those times. ", 585,385,130,190);
  }

  if(seesawShow == true){
    rect(185,150,200,210);
    text("Seesaw seats are like swings: one child per seat. A child who is too light to seesaw with a partner should find a different partner — not add another child to his or her side of the seesaw. Kids should always sit facing one another, not turned around. Teach kids to hold on tightly with both hands while on a seesaw, not to touch the ground or push off with their hands, and to keep feet to the sides, out from underneath the seesaw. ", 190,160,195,190);
  }

  signClick.draw();
  swingClick.draw();
  slideClick.draw();
  chessClick.draw();
  ropeClick.draw();
  seesawClick.draw();

  for(var b = 0; b < balloonAmount; b++){
    if(balloonY[b] > -100){
      balloonY[b]--;
      balloonX[b] = balloonX[b] + sin(radians(frameCount));
    }
    image(balloonImage, balloonX[b], balloonY[b], 60,60);
  }

} //end of draw
