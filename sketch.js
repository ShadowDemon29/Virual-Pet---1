var dog, happyDog
var foodS, foodStock
var database

function preload()
{
  dog = loadImage("../images/dogImg1.png");
  dogHappy = loadImage("../images/dogImg.png");
}

function setup() {
  createCanvas(500,500);
  foodStock=database.ref('Food')
  foodStock.on("value",readStock);

  dog.createSprite(200,200,10,10);
  dog.addImage()

}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }

  drawSprites();
  //add styles here

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  datavase.ref('/').update({
    Food : x
  })
}


