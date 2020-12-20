var movingRect, fixedRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
function setup() {
    createCanvas(1200, 800);
    fixedRect = createSprite(400, 100, 50, 50);
    movingRect = createSprite(400, 800, 50, 80);
    gameObject1 = createSprite(200, 200, 50, 50);
    gameObject2 = createSprite(400, 200, 50, 50);
    gameObject3 = createSprite(600, 200, 50, 50);
    gameObject4 = createSprite(800, 200, 50, 50);
    movingRect.velocityY = -5;
    fixedRect.velocityY = 5;
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "blue";
}

function draw() {
    background(0);
    drawSprites();
    bounceOff(movingRect,fixedRect);
}

