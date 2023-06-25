function loadImage(url) {
    return new Promise(resolve => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve(image);
        });
        image.src = url;
    });
}

class SpriteSheet {
    constructor(image ,width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
    }
    
}


const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');



loadImage('/img/mario_tile_set.png')
.then(image => {
    const sprites = new SpriteSheet(image, 16, 16);
    sprites.define('ground', 0, 0);
    sprites.draw('ground', context, 45, 62);
    
    context.drawImage(0, 0, 16, 16,
                      32, 32, 16, 16);

})
.catch(error => {
    console.error('Error with image.');
});