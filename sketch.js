var garden,rabbit,apple,orangeL,redL,green;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg,greenImg;
var pontuacao=0
var estado = "JOGAR"
var som
var Agrupo
var Ogrupo
var Rgrupo
var Ggrupo

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  greenImg = loadImage("leaf.png");
som = loadSound("gameover.mp3");
}


function setup(){
  
  createCanvas(400,400);

garden=createSprite(200,200);
garden.addImage(gardenImg);

Agrupo = new Group()
Ogrupo =  new Group()
Rgrupo = new Group()
Ggrupo = new Group()

rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

rabbit.setCollider("circle",0,0,170)
}

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  if (estado === "JOGAR"){
    
    rabbit.x = World.mouseX;
    var select_sprites = Math.round(random(1,4));

    if (frameCount % 80 == 0) {
      if (select_sprites == 1) {
        createApples();
      } else if (select_sprites == 2) {
       createOrange();
      }else if (select_sprites == 3) {
        createRed();
      }else if (select_sprites == 4) {
        creategreen();
      }
     }

     if (rabbit.isTouching(Agrupo)){
      estado = "ENCERRAR"
     }

     if (rabbit.isTouching(Ggrupo)||rabbit.isTouching(Rgrupo)||rabbit.isTouching(Ogrupo)){
       pontuacao+=1
     }

     drawSprites();
     textSize(20)
     fill("lightblue")
     text("pontuação: "+ pontuacao,200,25)
     
     textSize(11)
     fill("darkblue")
     text("Colete as folhas para ganhar pontos, mas não deixe o coelho encostar na maçã",5,390)

    }else if(estado === "ENCERRAR"){
      
      textSize(30)
      fill("darkred")
      text("Game Over",130,200)
     som.play()
  }
}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  Agrupo.add(apple)

}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
Ogrupo.add(orangeL)
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
 Rgrupo.add(redL)
}

function creategreen() {
  green = createSprite(random(50, 350),40,10,10);
  green.addImage(greenImg);
  green.scale=0.06;
  green.velocityY = 3;
  green.lifetime = 150;
Ggrupo.add(green)
}

