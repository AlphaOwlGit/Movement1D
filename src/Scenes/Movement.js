class Movement extends Phaser.Scene {
    constructor() {
        super("movementScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        this.bodyX = 400;
        this.bodyY = 350;

        this.bulletX = -10;
        this.bulletY = -10;

        this.counter = 0;
    }

    preload() {
        this.load.setPath("./assets/");
        // body
        this.load.image("character", "character_squareRed.png");
        this.load.image("bullet", "effect_shot.png");

        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Movement.js</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        my.sprite.character = this.add.sprite(this.bodyX, this.bodyY, "character");
        my.sprite.bullet = this.add.sprite(this.bulletX, this.bulletY, "bullet");
        my.sprite.bullet.active = false;

        my.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        my.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        my.SpaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(my.AKey.isDown) {
            if(this.bodyX > 0) {
                my.sprite.character.setX(this.bodyX = this.bodyX - 20);
            }
        }
        if(my.DKey.isDown) {
            if(this.bodyX < game.config.width) {
                my.sprite.character.setX(this.bodyX = this.bodyX + 20);
            }
        }

        if(my.SpaceKey.isDown && my.sprite.bullet.y < 0) {
            my.sprite.bullet.x = this.bodyX;
            my.sprite.bullet.y = this.bodyY;
        }

        if (my.sprite.bullet.y > -10) {
            my.sprite.bullet.y -= 10;
        }
    }

}