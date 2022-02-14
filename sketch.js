var database;
var dog, happyDog, hungryDog;
var food, food_simb, food_image;
var food_count = 0;
var last_lunch = 13;
var form, lastlunch, food;

function preload(){
hungryDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
food_image = loadImage('Milk.png');
}

function setup() {
  database = firebase.database();
  createCanvas(1000,400);

  dog = createSprite(800, 280, 50, 100);
  dog.addImage('hungryDog', hungryDog);
  dog.scale = 0.3;
  food_simb = createSprite(100, 300, 20, 40);
  food_simb.addImage('food_image', food_image);
  food_simb.scale = 0.2;
  
  food = new Food();
  food.getCount();
  form = new Form();
  lastlunch = new LastLunch();
  lastlunch.getCount();
}

function draw() {
  background(46,139,87);
  form.display();
  if(last_lunch >= 24){
    last_lunch = 0;
  }
  drawSprites();
}