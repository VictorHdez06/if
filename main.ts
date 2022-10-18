namespace SpriteKind {
    export const Cherry = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cherry, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    if (info.score() > 5) {
        mySprite.sayText("Too many cherries")
    }
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . f 5 5 5 5 5 5 5 5 f . . . 
    . . f 5 5 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 f f . . 
    f 5 5 5 5 5 5 5 5 f f f . . . . 
    f 5 5 5 5 5 f f f . . . . . . . 
    f 5 5 5 5 5 5 5 f . . . . . . . 
    f 5 5 5 5 5 5 5 5 f f f . . . . 
    . f 5 5 5 5 5 5 5 5 5 5 f f . . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . . f 5 5 5 5 5 5 5 5 5 5 f . . 
    . . . f 5 5 5 5 5 5 5 5 f . . . 
    . . . . f f 5 5 5 5 f f . . . . 
    . . . . . . f f f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
game.splash("Collect 5 cherries")
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectile(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, randint(-30, 30), randint(-30, 30), SpriteKind.Cherry)
})
