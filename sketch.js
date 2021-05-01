var database;

var game, gameState;
var player, playerCount;
var form;

var allPlayers, finishedPlayers;
var distance;

var boy1, boy2, boy3, boy4;
var boy1_img, boy2_img, boy3_img, boy4_img;
var boys;
var passedFinish;

var xSet;
var yVel, xVel;

var ground_img, track_img;

var bronze_img, silver_img, gold_img;

function preload() {
  boy1_img = loadImage("Images/FalconBoy.png");
  boy2_img = loadImage("Images/BlueJaysBoy.png");
  boy3_img = loadImage("Images/CardinalBoy.png");
  boy4_img = loadImage("Images/OspreysBoy.png");

  ground_img = loadImage("Images/ground.png");
  track_img = loadImage("Images/track.png");

  bronze_img = loadImage("Images/bronze.png");
  silver_img = loadImage("Images/silver.png");
  gold_img = loadImage("Images/gold.png");
}

function setup() {
  //create the canvas
  createCanvas(displayWidth * 0.99, displayHeight * 0.885);

  //create the database
  database = firebase.database();

  //set the variables
  gameState = 0;
  distance = 0;
  finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  //draw the background
  background(200, 200, 255);

  //start the game
  if (playerCount === 4 && finishedPlayers === 0) {
    game.updateState(1);
  }

  //start the game for real
  if (gameState === 1) {
    game.play();
  }

  //end the game
  if (finishedPlayers === 4) {
    game.updateState(2);
    //gameState = 2;
  }

  //display ranking
  if (gameState === 2 && finishedPlayers === 4) {
    game.displayRanks();
  }
}
function keyPressed() {
  if (keyCode === 13 && gameState !== 1 && passedFinish === false) {
    form.enter();
    console.log("hai");
    passedFinish = true;
  }
}
