// name: Hannah Gong
// Title: Rocket Patrol Mods
// Time: idk but a long time
// Points Breakdown:
// Mod 1: create a new enemy spaceship that's smaller, moves faster, and is worth more points (5)
//        fanyspaceship.png is smaller than spaceship.png, is set to move 1.5 times faster, and is worth 1.5 times more points
// Mod 2: create 4 explosion sounds and randomize which one plays on impact (3)
//        added 4 explosion sounds, upon impact, generate a random number between 1 and 4 and play the corresponding sound
// Mod 3: adds time for successful hits and subtracts time for misses (5)
// Mod 4: display time remaining on screen (3)
//        time remaining is in top right corner

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play]
}
let game = new Phaser.Game(config)

// set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

// reserve keyboard bindings
let keyFIRE, keyRESET, keyLEFT, keyRIGHT