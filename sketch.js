var dog,happyDog
var food, foodStock
var database
function preload()
{
  Dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
 }

 function setup() {
  database = firebase.database()
  createCanvas(500,500);
  dog = createSprite(250,250,2,2);
  dog.addImage(Dog);
  foodStock = database.ref('food');
  foodStock.on("value" , readStock);


}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(food)
    dog.addImage(happyDog);
  }


  drawSprites();  
  textSize(18)
  stroke("white")
  text("Note: Please press UP ARROW key to feed Drago Milk!!!",20,40)
}
//function to read values from database
function readStock(data){
food=data.val();
}
//function to write values from database
function writeStock(x){
  if(x<=0){
    x = 0;
  }
  else{
    x=x+1;
  }
 database.ref('/').update({
  food:x
})
}


