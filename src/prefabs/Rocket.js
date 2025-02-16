// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame) 

        // add object to existing scene
        scene.add.existing(this)    // add to existing, displayList, updateList
        this.isFiring = false       // track rocket's firing status
        this.moveSpeed = 2           // rocket speeed in pixels/frames
        this.sfxShot = scene.sound.add('rocket firing')
        this.rocketMiss = false
    }

    update() {
        // left/right movement
        if(!this.isFiring) {
            // Move the rocket to the mouse's X position
            this.x = this.scene.input.activePointer.x;

            // Constrain the rocket within the game boundaries
            this.x = Phaser.Math.Clamp(
                this.x,
                borderUISize + this.width / 2,
                game.config.width - borderUISize - this.width / 2
            )

    //        if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
        //        this.x -= this.moveSpeed
        //    } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
        //        this.x += this.moveSpeed
        //    }
        }

        // fire button
        //if(Phaser.Input.Keyboard.JustDown(keyFIRE)) {
        //    this.isFiring = true
        //    this.sfxShot.play()
        //}

        // if fired, move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed
        }

        // reset on miss 
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false
            this.rocketMiss = true
            this.y = game.config.height - borderUISize - borderPadding
        }
    }

    reset() {
        this.isFiring = false
        this.y = game.config.height - borderUISize - borderPadding
    }
}