/**
 * Created by mylesparker on 12/1/16.
 */

var zeldaSprite;
var backgroundSprite;
var foregroundSprite;
var oldManSprite;
var chickenSprite;

function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

Sprite.prototype.draw = function(renderingContext, x, y) {
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height);
};

function initSprites(img){
    zeldaSprite = [
        new Sprite(img, 623, 54, 39, 42), // UP
        new Sprite(img, 506, 51, 34, 44), // DOWN
        new Sprite(img, 311, 53, 40, 43), // RIGHT
        new Sprite(img, 539, 53, 40, 43),  // LEFT
        new Sprite(img, 358, 141, 44, 73), // SWORD UP
        new Sprite(img, 161, 171, 44, 73), // SWORD DOWN
        new Sprite(img, 248, 173, 71, 42), // SWORD RIGHT
        new Sprite(img, 570, 173, 72, 42) // SWORD LEFT
    ];

    backgroundSprite = new Sprite(img, 311, 244, 45, 45);

    oldManSprite = new Sprite(img, 490, 245, 45, 45);

    chickenSprite = new Sprite(img, 763, 246, 42, 43);
    // foregroundSprite = new Sprite(img, 17, 289, 336, 112);
}