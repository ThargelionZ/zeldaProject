/**
 * Created by mylesparker on 12/1/16.
 */

var frames = 0;
var zelda;
var canvas;
var renderingContext;
var width;
var height;
var states = {Splash: 0, Game: 1, Score: 2};
var currentState;

var direction = 0;

var sword = 0;
// var foregroundPosition = 0;

function Zelda() {
    this.frame = 0;
    this.x = 150;
    this.y = 50;
    
    this.goingup = function () {
        if(this.y <= -49){
            this.y = -49;
        } else {
            this.y -= 5;
        }
    };

    this.goingdown = function () {
        if(this.y >= 344){
            this.y = 344;
        } else {
            this.y += 5;
        }
    };

    this.goingright = function () {
        if(this.x >= 288){
            this.x = 288;
        } else {
            this.x += 5;
        }
    };

    this.goingleft = function () {
        if(this.x <= -52){
            this.x = -52;
        } else {
            this.x -= 5;
        }
    };

    this.draw = function() {
        renderingContext.save();

        renderingContext.translate(this.x, this.y);

        zeldaSprite[direction].draw(renderingContext, 50, 50);

        renderingContext.restore();
    };
}

function main() {
    windowSetUp();
    canvasSetUp();
    loadGraphics();
    currentState = states.Splash;

    document.body.appendChild(canvas);

   zelda = new Zelda();
}

function windowSetUp() {
    width = window.innerWidth;
    height = window.innerHeight;

    var inputUp = "pressstart";
    if(width >= 500){
        width = 380;
        height = 430;
        inputUp = "keydown";
    }

    // Create a listener on the input event.
    
    // UP - 38, DOWN - 40, RIGHT - 39, LEFT - 37

    document.addEventListener(inputUp, onPress);
}

function onPress(evt) {
    if(evt.keyCode == 38){
        direction = 1;
        zelda.goingup();
    }
    else if(evt.keyCode == 40){
        direction = 0;
        zelda.goingdown();
    }
    else if(evt.keyCode == 39){
        direction = 2;
        zelda.goingright();
    }
    else if(evt.keyCode == 37){
        direction = 3;
        zelda.goingleft();
    }

    if(evt.keyCode == 32){
        if(direction == 1){
            direction = 4;
            setTimeout(function () {
                direction = 1;
            }, 200);
        } else if (direction == 0){
            direction = 5;
            setTimeout(function () {
                direction = 0;
            }, 200);
        } else if (direction == 2){
            direction = 6;
            setTimeout(function () {
                direction = 2;
            }, 200);
        } else if (direction == 3){
            direction = 7;
            setTimeout(function () {
                direction = 3;
            }, 200);
        }
    }
}

function canvasSetUp() {
    canvas = document.createElement("canvas");

    canvas.style.border = "15px solid #382b1d";
    canvas.style.margin = "0px auto";

    canvas.width = width;
    canvas.height = height;

    renderingContext = canvas.getContext("2d");
}

function loadGraphics() {
    // Initiate the sprite sheet
    var img = new Image();
    img.src = "nesZeldaSpriteSheet.png";
    img.onload = function() {
        initSprites(this);
        renderingContext.fillStyle = "#8BE4FD";
        // NOT NECESSARY ZeldaSprite[0].draw(renderingContext, 50, 50);
        gameLoop()
    };
}

function gameLoop() {
    update();
    render();

    window.requestAnimationFrame(gameLoop);
}

function update() {
    frames++;
}

function render() {
    renderingContext.fillRect(0, 0, width, height);
    backgroundSprite.draw(renderingContext, 100, 100);
    oldManSprite.draw(renderingContext, 30, 67);
    chickenSprite.draw(renderingContext, Math.floor(Math.random() * 340), Math.floor(Math.random() * 390));
    zelda.draw(renderingContext);

}