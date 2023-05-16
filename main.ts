namespace SpriteKind {
    export const Teleporter = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const Teleporter_2 = SpriteKind.create()
    export const spritetest1 = SpriteKind.create()
    export const heavenlystairs = SpriteKind.create()
    export const NPC2 = SpriteKind.create()
    export const NPC3 = SpriteKind.create()
    export const moonstairs = SpriteKind.create()
    export const moongoddess = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Teleporter, function (sprite, otherSprite) {
    scene.setBackgroundImage(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffffffdf
        fffffffffffffffffffffffdffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffdfffffffffff
        fffffdfffddddddddddddfffffffffffffffffffffdffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffdddffffffffff
        ffffffdddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffff
        fffffdddddddddddddddddddfffffdddddddddddddfdffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffff
        fffffddbbbbbbbbbbbbbddddffffdddddddddddddddddfffffffffffffffdfffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffdbbbbbbbbbbbbbbbbbdfffdddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffddbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        bbdbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        bbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffddddddddddddddfffffffffffffffff
        bbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddfffffffffffffdf
        bbbbcccccccccccccccbbbbbbbbbbcccccccccbbbbbbbbbbdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddffffffffffffff
        bccccccccccccccccccbbbbbbbbbccccccccccccccbbbbbbdddffffffffffffffdffffffffffffffffdffffffdffffffffffffffdfffffffffffffffffddddddddddddddddddddddddddffffffffffff
        bccccccccccccccccccccbbbbbccccccccccccccccbbbbbbbbdddfffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffdddddddddddbbbbbbbbbbdddddddffffffffff
        bccccccccccccccccccccbbbbbccccccccccccccccbbbbbbbbbbdddddddddddfffffffffffffffffffffffffffffffffffffffdddddffffffdffffffffddddddddbbbbbbbbbbbbbbbdddddffffffffff
        bccccccccccccccccccccbbbbccccccccccccccccccccbbbbbbbbbbbddddddddffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffdddddbbbbbbbbbbbbbbbbbbbbdddffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbddfffffffffffffffffffffffffffffdffffffffffdffffffffffffffffddddbbbbbbbbbbbbbbbbbbbbbbbddffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccbccccbbbbbbbbbbbbdddfffffffffffffffffffffffffffffffffffdfffffffffffffffdddddbbbbbbbbbbbbbbbbbbbbbbbbdfdddddffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbddddddddffffffdffffffffffffffffffffffdfffffffffffffffddddbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbddddddddfffffffffffffffffffffffffffffffffffffdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddd
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbddffffffffffffffffffffffffffffffffffddddddddddbbbbbbbbcccccccccccbbbbbbbbbbbdddbdddbbd
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbdddfffffffffffffffffffffffffffffffffdddddddbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbb
        cccccccccccccfffffffcccccccccccccccccccccccccccccccccccccccccccccccccbbffffffffffffffffffffffffffffffffffffffddddbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbbbbbbb
        ffccccccccffffffffffffffcccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffdddbbbbbbbbcccccccccccccccccccccccccbbbbbbbbbbbbbbb
        ffffffffffffffffffffffffffffcccccccccccccfffffccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbb
        ffffffffffffffdfffffffffffffccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbbbbb
        fffffffffffffdddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddbbbbbbbccccccccccccccccccccccccccccccbbbbccccccbb
        ffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffddddddddddbbbbbbbcccccccccccccccccccccccccccccccbccccccccccc
        fffffffffffffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddbbbbbbbccccccccccccccccccccccccccccccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccc
        ffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffddddddddbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbbbbccccccccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        dddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        dddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffff
        dddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        dddbbbbbbddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddd
        bbbbbbbbbbbbbbbbbbbddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddd
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbd
        ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddfffffffffffffffffffffffffffffffffddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddfffffffffffffffffffffffffffdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbddddddddfffffffffffffffffddddddbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbbbbbbbbbb
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbddddddfffffffffffddddbbbbbbbbbbbbbbbbcccccccccccccbbbbbbbccccccccccccccccccccccccccccbbbbbb
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbdffffddddddbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccb
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbddddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbdddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdbbbccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbccccccccccccccccccccccccccccccccccccddddbbbbbbdddddddddddddddddddbbbbbbbbbbbbdddddddddddddddd
        cccccccccdddddddbbbbbbbdddddddddddddddddddddcccccccccccccccccccbbccccccccccccccccccccccccccccccccccccdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddd
        cccccccdddbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddd
        cccdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddccccccccccccccccccccccccccccccccddddddddbbbbbbbbbbbbbbbbbbcccccccccccccccccccccbbbbbbbbbbbbbbbbbbbddd
        dddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccdddddddddbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbb
        dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddccccccccccbbbdddbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbb
        ddbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddcbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbb
        bbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbb
        bbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb
        bbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbddddddbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbdddcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbdddccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbddccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbddcccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbddccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddcccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddcccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbdddcccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbdddcccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbdddccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbdddcccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddddcccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddddccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbdddccccccccccccccccccccccccccccccccccccccccccc
        `)
    sprites.destroy(mySprite2)
    averysprite.setPosition(143, 67)
    blankguynpc = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . f f 1 1 f f . . . . . 
        . . . . . f d 1 1 d f . . . . . 
        . . . . . . f d d f . . . . . . 
        . . . . . f f d d f f . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . f d 1 1 d f . . . . . 
        . . . . . f f 1 1 f f . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.NPC)
    blankguynpc.setPosition(32, 59)
    game.showLongText("A person appeared.", DialogLayout.Bottom)
    game.showLongText("Maybe you can ask them about the sky.", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    game.showLongText("???: Who must you be?", DialogLayout.Bottom)
    if (game.ask("A: I am Avery.", "B: Why is everything purple?")) {
        game.showLongText("Avery: I am Avery.", DialogLayout.Bottom)
        game.showLongText("???: Hello Avery, I am ???.", DialogLayout.Bottom)
    } else {
        game.showLongText("Avery: Why is everything purple?", DialogLayout.Bottom)
        game.showLongText("???: I don't know.", DialogLayout.Bottom)
    }
    game.showLongText("???: Why have you come to talk to me?", DialogLayout.Bottom)
    if (game.ask("A: Why is the world purple?", "B: I want to see other colors.")) {
        game.showLongText("Avery: Why is the world purple?", DialogLayout.Bottom)
        game.showLongText("???: Perhaps asking the cloud people would answer your question.", DialogLayout.Bottom)
    } else {
        game.showLongText("Avery: I want to see other colors.", DialogLayout.Bottom)
        game.showLongText("???: Perhaps asking the cloud people would answer your question", DialogLayout.Bottom)
    }
    sprites.destroy(blankguynpc)
    game.showLongText("...", DialogLayout.Bottom)
    game.showLongText("The person disappeared.", DialogLayout.Bottom)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 . 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Teleporter_2)
    mySprite4.setPosition(152, 67)
    game.showLongText("Try going back through the star.", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.heavenlystairs, function (sprite, otherSprite) {
    scene.setBackgroundImage(assets.image`cloud place`)
    sprites.destroy(STAIRS)
    music.stopAllSounds()
    music.play(music.createSong(hex`0078000408040200001c00010a006400f4016400000400000000000000000000000000050000047e0000000800012408001000012010001400012214001800012018001c0001221c002000012020002800012028003000011e30003400012034003800011e38003c0001203c004000011e40004400011948005400012954005800012758005c0001255c006000012460006400012264006800012468006c0001226c007800012709010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003000000001000111100011000111200021000111300031000111400041000111500051000111600061000111700071000111`), music.PlaybackMode.LoopingInBackground)
    mySprite = sprites.create(assets.image`CloudGirl`, SpriteKind.NPC2)
    mySprite3 = sprites.create(assets.image`CloudGuy`, SpriteKind.NPC3)
    mySprite.setPosition(52, 38)
    mySprite3.setPosition(82, 101)
    game.showLongText("The stairs took you to a mysterious place.", DialogLayout.Bottom)
    game.showLongText("There are weird people too.", DialogLayout.Bottom)
    game.showLongText("Avery: I should talk to the girl.", DialogLayout.Bottom)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(averysprite)
    animation.runImageAnimation(
    averysprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . c c c b b c . . . . . 
        . . . . c c d c c b c c . . . . 
        . . . . c c c d c c c c . . . . 
        . . . c . c b d d b c . c . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . c c c c c c c . . . . . 
        . . . . b . b b b d b . . . . . 
        . . . . d . c c c c . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . f f . . f . . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC2, function (sprite, otherSprite) {
    game.showLongText("Mysterious Person: Huh?", DialogLayout.Bottom)
    game.showLongText("Mysterious Person: A human? Who are you?", DialogLayout.Bottom)
    if (game.ask("A: I am Avery.", "B: Who are you?")) {
        game.showLongText("Avery: I am Avery.", DialogLayout.Bottom)
        game.showLongText("Serta: Hello Avery, I am Serta. A cloud person.", DialogLayout.Bottom)
    } else {
        game.showLongText("Avery: Who are you?", DialogLayout.Bottom)
        game.showLongText("Serta: Serta, a cloud person.", DialogLayout.Bottom)
    }
    game.showLongText("You found the cloud people, maybe they can help you.", DialogLayout.Bottom)
    if (game.ask("A: Can you help me?")) {
        game.showLongText("Avery: Can you help me?", DialogLayout.Bottom)
        game.showLongText("Serta: I do not know myself.", DialogLayout.Bottom)
        game.showLongText("Serta: Perhaps ask around!", DialogLayout.Bottom)
    }
    sprites.destroy(mySprite)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(averysprite)
    animation.runImageAnimation(
    averysprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . c c c b b c . . . . . 
        . . . . c c d c c b c c . . . . 
        . . . . c c c d c c c c . . . . 
        . . . c . c b d d b c . c . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . d c c c c d . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(averysprite)
    animation.runImageAnimation(
    averysprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . c c c b b c . . . . . 
        . . . . c c d c c b c c . . . . 
        . . . . c c c d c c c c . . . . 
        . . . c . c b d d b c . c . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . c c c c c c . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . d c c c c d . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC3, function (sprite, otherSprite) {
    game.showLongText("Mysterious Person:...", DialogLayout.Bottom)
    if (game.ask("A: Can you help me?")) {
        game.showLongText("Avery: Can you help me?", DialogLayout.Bottom)
        game.showLongText("Mysterious Person: Who are you?", DialogLayout.Bottom)
    }
    if (game.ask("A: I am Avery.", "B: Who are YOU?")) {
        game.showLongText("Avery: I am Avery.", DialogLayout.Bottom)
        game.showLongText("Astro: I'm Astro.", DialogLayout.Bottom)
    } else {
        game.showLongText("Avery: Who are YOU?", DialogLayout.Bottom)
        game.showLongText("Astro: I'm Astro...?", DialogLayout.Bottom)
    }
    game.showLongText("You should ask him about the colors.", DialogLayout.Bottom)
    if (game.ask("A: Why can I only see purple?", "B: I can only see purple.")) {
        game.showLongText("Avery: Can you help me find out why I can only see purple?", DialogLayout.Bottom)
        game.showLongText("Astro: Ah, it must be because it is night.", DialogLayout.Bottom)
    } else {
        game.showLongText("Avery: I can only see purple.", DialogLayout.Bottom)
        game.showLongText("Astro: That's because it is night.", DialogLayout.Bottom)
    }
    game.showLongText("Astro: If you are trying to find out why you can only see purple..", DialogLayout.Bottom)
    game.showLongText("Astro: It is because of the Moon Goddess.", DialogLayout.Bottom)
    if (game.ask("A: Moon Goddess?")) {
        game.showLongText("Avery: Moon Goddess?", DialogLayout.Bottom)
        game.showLongText("Astro: Yes, the Moon Goddess brings night upon us.", DialogLayout.Bottom)
    }
    game.showLongText("Astro: This causes her to hide the sun, which makes us only see one color.", DialogLayout.Bottom)
    game.showLongText("Astro: However, she never goes away.", DialogLayout.Bottom)
    game.showLongText("Astro: She mourns over someone close to her I heard.", DialogLayout.Bottom)
    game.showLongText("Avery: ...", DialogLayout.Bottom)
    sprites.destroy(mySprite3)
    sprites.destroy(mySprite)
    STAIRSAGAIN = sprites.create(assets.image`myImage2`, SpriteKind.moonstairs)
    STAIRSAGAIN.setPosition(121, 6)
    game.showLongText("More stairs.", DialogLayout.Bottom)
    game.showLongText("Go climb them.", DialogLayout.Bottom)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(averysprite)
    animation.runImageAnimation(
    averysprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . c c c b b c . . . . . 
        . . . . c c d c c b c c . . . . 
        . . . . c c c d c c c c . . . . 
        . . . c . c b d d b c . c . . . 
        . . . . . . c d d c . . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . c c c c c c c . . . . 
        . . . . d b b b b b . b . . . . 
        . . . . . . c c c c . d . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . f . . f f . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.moonstairs, function (sprite, otherSprite) {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    sprites.destroy(STAIRSAGAIN)
    music.stopAllSounds()
    music.play(music.createSong(assets.song`moonpalacemusic`), music.PlaybackMode.LoopingInBackground)
    averysprite.setPosition(75, 101)
    game.showLongText("Avery: ?!?!?!", DialogLayout.Bottom)
    game.showLongText("Avery: Where am I?", DialogLayout.Bottom)
    moongod = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 3 3 . . . . . . 
        . . . . 3 3 3 . . 3 3 . . . . . 
        . . . . 3 . . . . . 3 3 . . . . 
        . . . 3 . . . . . . . 3 . . . . 
        . . . 3 . . . . . . . 3 . . . . 
        . . . 3 3 . . . . . . . 3 . . . 
        . . . . 3 . . . . . . . 3 . . . 
        . . . . 3 . . . . . . . 3 . . . 
        . . . . . 3 . . . . . 3 3 . . . 
        . . . . . . 3 3 . . . 3 . . . . 
        . . . . . . 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.moongoddess)
    moongod.setPosition(77, 28)
    game.showLongText("???: Huh...?", DialogLayout.Bottom)
    game.showLongText("...", DialogLayout.Bottom)
    game.showLongText("???: ...", DialogLayout.Bottom)
    game.showLongText("Approach the mysterious lady.", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.moongoddess, function (sprite, otherSprite) {
    game.showLongText("???: Who are you..?!", DialogLayout.Bottom)
    if (game.ask("A: ...")) {
        game.showLongText("Avery: ...", DialogLayout.Bottom)
        game.showLongText("???: WHO ARE YOU!?", DialogLayout.Bottom)
    }
    game.showLongText("Avery: !!", DialogLayout.Bottom)
    if (game.ask("A: I'm Avery.")) {
        game.showLongText("Avery: I'm Avery.", DialogLayout.Bottom)
        game.showLongText("???: How did you get all the way to the moon palace..?", DialogLayout.Bottom)
    }
    if (game.ask("A: Moon palace?")) {
        game.showLongText("Avery: Moon palace?", DialogLayout.Bottom)
        game.showLongText("???: Yes the Moon palace.", DialogLayout.Bottom)
    }
    game.showLongText("Moon Goddess: I am the Moon Goddess.", DialogLayout.Bottom)
    game.showLongText("Moon Goddess: Now explain how you got all the way here.", DialogLayout.Bottom)
    if (game.ask("A: Stairs.")) {
        game.showLongText("Avery: Stairs took me here.", DialogLayout.Bottom)
        game.showLongText("Moon Goddess: Stairs? As in.. heavenly stairs?", DialogLayout.Bottom)
    }
    if (game.ask("A: Heavenly stairs?")) {
        game.showLongText("Avery: Heavenly stairs?", DialogLayout.Bottom)
        game.showLongText("Moon Goddess: Yes, they are to guide the ones chosen by this world's God.", DialogLayout.Bottom)
    }
    game.showLongText("Moon Goddess: Wait a minute..", DialogLayout.Bottom)
    game.showLongText("Moon Goddess: You're here to eliminate me aren't you.", DialogLayout.Bottom)
    game.showLongText("?!?!", DialogLayout.Bottom)
    game.showLongText("Moon Goddess: I will have to fight you back then!", DialogLayout.Bottom)
    sprites.destroy(moongod)
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 3 . . . . . . . . . . . . . 
        . . 3 3 . . . . . . . . 3 . . . 
        . . . . 3 3 . . . . . 3 . . . . 
        . . . . . . 3 3 3 3 3 . . . . . 
        . . . . . . . . . 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 3 . . . . 
        . . . 3 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 3 3 . . . . 
        . . . . . 3 . . . . . . 3 . . . 
        . . . . . 3 . . . . . . 3 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite5.setPosition(134, 61)
    statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    statusbar.attachToSprite(mySprite5)
    game.showLongText("Press \"SPACE BAR\" to launch attacks.", DialogLayout.Bottom)
    game.showLongText("Use arrow keys to avoid getting hit!", DialogLayout.Bottom)
    game.showLongText("Watch out for your health as well.", DialogLayout.Bottom)
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite5, 23, 18)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Teleporter_2, function (sprite, otherSprite) {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111ffffffffffffffffffffffffffffffffffffdffffffffffffffffffffffdf
        fffffffffffffffffffffffdffffdfffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111fffffffffffffffffffffffffffdfffffffffffffffffffffdfffffffffff
        fffffdfffddddddddddddfffffffffffffffffffffdffffffffffdffffffffffffffffff111111111111111111111111111ffffffffffdfffffffffffffffffffffffffffffffffffffdddffffffffff
        ffffffdddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffff
        fffffdddddddddddddddddddfffffdddddddddddddfdffffffffffffffffffffffffffdf111111111111111111111111111fffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffff
        fffffddbbbbbbbbbbbbbddddffffdddddddddddddddddfffffffffffffffdffffffffffff111111111111111111111111fffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffdbbbbbbbbbbbbbbbbbdfffdddddddddddddddddddfffffffffffffffffffffffffffff111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffddbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbddddddffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddfffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        bbdbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        bbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffddddddddddddddfffffffffffffffff
        bbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddfffffffffffffdf
        bbbbcccccccccccccccbbbbbbbbbbcccccccccbbbbbbbbbbdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddffffffffffffff
        bccccccccccccccccccbbbbbbbbbccccccccccccccbbbbbbdddffffffffffffffdffffffffffffffffdffffffdffffffffffffffdfffffffffffffffffddddddddddddddddddddddddddffffffffffff
        bccccccccccccccccccccbbbbbccccccccccccccccbbbbbbbbdddfffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffdddddddddddbbbbbbbbbbdddddddffffffffff
        bccccccccccccccccccccbbbbbccccccccccccccccbbbbbbbbbbdddddddddddfffffffffffffffffffffffffffffffffffffffdddddffffffdffffffffddddddddbbbbbbbbbbbbbbbdddddffffffffff
        bccccccccccccccccccccbbbbccccccccccccccccccccbbbbbbbbbbbddddddddffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffdddddbbbbbbbbbbbbbbbbbbbbdddffffffffff
        ccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbddfffffffffffffffffffffffffffffdffffffffffdffffffffffffffffddddbbbbbbbbbbbbbbbbbbbbbbbddffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccbccccbbbbbbbbbbbbdddfffffffffffffffffffffffffffffffffffdfffffffffffffffdddddbbbbbbbbbbbbbbbbbbbbbbbbdfdddddffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbddddddddffffffdffffffffffffffffffffffdfffffffffffffffddddbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbddddddddfffffffffffffffffffffffffffffffffffffdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddd
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbddffffffffffffffffffffffffffffffffffddddddddddbbbbbbbbcccccccccccbbbbbbbbbbbdddbdddbbd
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbdddfffffffffffffffffffffffffffffffffdddddddbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbb
        cccccccccccccfffffffcccccccccccccccccccccccccccccccccccccccccccccccccbbffffffffffffffffffffffffffffffffffffffddddbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbbbbbbb
        ffccccccccffffffffffffffcccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffdddbbbbbbbbcccccccccccccccccccccccccbbbbbbbbbbbbbbb
        ffffffffffffffffffffffffffffcccccccccccccfffffccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbb
        ffffffffffffffdfffffffffffffccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbbbbb
        fffffffffffffdddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddbbbbbbbccccccccccccccccccccccccccccccbbbbccccccbb
        ffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffddddddddddbbbbbbbcccccccccccccccccccccccccccccccbccccccccccc
        fffffffffffffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddbbbbbbbccccccccccccccccccccccccccccccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccc
        ffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffddddddddbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbbbbccccccccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccc
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffdddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffdddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffddddddddddddddddddddbbbbbbbbbbbbbbbbbddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddfffffffffffffffffffff
        ffffffffdddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddffffffffffffff
        ffffdddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddfffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffff
        ffdddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddfffffffffffffffffffffffffffdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddfffff
        ddddddbbbbbbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbddddddddfffffffffffffffffddddddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccbbbbbbbbbdddddddf
        dddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbddddddfffffffffffddddbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccbbbbbbbbbdddd
        bbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbdffffddddddbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbd
        bbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbddddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbb
        bbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbdddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdbbbccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbccccccccccccccccccccccccccccccccccccddddbbbbbbdddddddddddddddddddbbbbbbbbbbbbdddddddddddddddd
        cccccccccdddddddbbbbbbbdddddddddddddddddddddcccccccccccccccccccbbccccccccccccccccccccccccccccccccccccdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddd
        cccccccdddbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddd
        cccdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddccccccccccccccccccccccccccccccccddddddddbbbbbbbbbbbbbbbbbbcccccccccccccccccccccbbbbbbbbbbbbbbbbbbbddd
        dddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccdddddddddbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbb
        dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddccccccccccbbbdddbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbb
        ddbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddcbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbb
        bbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbb
        bbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb
        bbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbddddddbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbdddcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbdddccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbddccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbddcccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbddccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddcccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddcccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbdddcccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbdddcccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbdddccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbdddcccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddddccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddddcccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddddccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbdddccccccccccccccccccccccccccccccccccccccccccc
        `)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 . 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Teleporter_2)
    mySprite2.setPosition(152, 67)
    averysprite.setPosition(6, 68)
    sprites.destroy(mySprite4)
    sprites.destroy(mySprite2)
    STAIRS = sprites.create(assets.image`myImage2`, SpriteKind.heavenlystairs)
    STAIRS.setPosition(124, 52)
    game.showLongText("Stairs appeared.", DialogLayout.Bottom)
    game.showLongText("Was there always stairs here?", DialogLayout.Bottom)
    game.showLongText("Climb the stairs.", DialogLayout.Bottom)
})
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite5: Sprite = null
let moongod: Sprite = null
let STAIRSAGAIN: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let STAIRS: Sprite = null
let mySprite4: Sprite = null
let blankguynpc: Sprite = null
let mySprite2: Sprite = null
let averysprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111ffffffffffffffffffffffffffffffffffffdffffffffffffffffffffffdf
    fffffffffffffffffffffffdffffdfffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111fffffffffffffffffffffffffffdfffffffffffffffffffffdfffffffffff
    fffffdfffddddddddddddfffffffffffffffffffffdffffffffffdffffffffffffffffff111111111111111111111111111ffffffffffdfffffffffffffffffffffffffffffffffffffdddffffffffff
    ffffffdddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffff
    fffffdddddddddddddddddddfffffdddddddddddddfdffffffffffffffffffffffffffdf111111111111111111111111111fffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffff
    fffffddbbbbbbbbbbbbbddddffffdddddddddddddddddfffffffffffffffdffffffffffff111111111111111111111111fffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffdbbbbbbbbbbbbbbbbbdfffdddddddddddddddddddfffffffffffffffffffffffffffff111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffddbbbbbbbbbbbbbbbbbbbbdddddbbbbbbbbbbddddddffffffffffffffffffffffffffffff11111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddfffffffffffffffffffffffffffffff111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbdbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    bbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffddddddddddddddfffffffffffffffff
    bbbbbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddfffffffffffffdf
    bbbbcccccccccccccccbbbbbbbbbbcccccccccbbbbbbbbbbdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddffffffffffffff
    bccccccccccccccccccbbbbbbbbbccccccccccccccbbbbbbdddffffffffffffffdffffffffffffffffdffffffdffffffffffffffdfffffffffffffffffddddddddddddddddddddddddddffffffffffff
    bccccccccccccccccccccbbbbbccccccccccccccccbbbbbbbbdddfffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffdddddddddddbbbbbbbbbbdddddddffffffffff
    bccccccccccccccccccccbbbbbccccccccccccccccbbbbbbbbbbdddddddddddfffffffffffffffffffffffffffffffffffffffdddddffffffdffffffffddddddddbbbbbbbbbbbbbbbdddddffffffffff
    bccccccccccccccccccccbbbbccccccccccccccccccccbbbbbbbbbbbddddddddffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffdddddbbbbbbbbbbbbbbbbbbbbdddffffffffff
    ccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbddfffffffffffffffffffffffffffffdffffffffffdffffffffffffffffddddbbbbbbbbbbbbbbbbbbbbbbbddffffffffff
    cccccccccccccccccccccccccccccccccccccccccccccccccbccccbbbbbbbbbbbbdddfffffffffffffffffffffffffffffffffffdfffffffffffffffdddddbbbbbbbbbbbbbbbbbbbbbbbbdfdddddffff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbddddddddffffffdffffffffffffffffffffffdfffffffffffffffddddbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddff
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbddddddddfffffffffffffffffffffffffffffffffffffdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddd
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbddffffffffffffffffffffffffffffffffffddddddddddbbbbbbbbcccccccccccbbbbbbbbbbbdddbdddbbd
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbdddfffffffffffffffffffffffffffffffffdddddddbbbbbbbcccccccccccccccccbbbbbbbbbbbbbbbbbbb
    cccccccccccccfffffffcccccccccccccccccccccccccccccccccccccccccccccccccbbffffffffffffffffffffffffffffffffffffffddddbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbbbbbbb
    ffccccccccffffffffffffffcccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffdddbbbbbbbbcccccccccccccccccccccccccbbbbbbbbbbbbbbb
    ffffffffffffffffffffffffffffcccccccccccccfffffccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddbbbbbbbcccccccccccccccccccccccccccbbbbbbbbbbbbbb
    ffffffffffffffdfffffffffffffccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbbbbbbbcccccccccccccccccccccccccccccbbbbbbbbbbbbb
    fffffffffffffdddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddbbbbbbbccccccccccccccccccccccccccccccbbbbccccccbb
    ffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffddddddddddbbbbbbbcccccccccccccccccccccccccccccccbccccccccccc
    fffffffffffffffffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddbbbbbbbccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccc
    ffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffddddddddbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddddddddbbbbccccccccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccc
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffdddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffdddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffddddddddddddddddddddbbbbbbbbbbbbbbbbbddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddfffffffffffffffffffff
    ffffffffdddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddffffffffffffff
    ffffdddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddfffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffff
    ffdddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddfffffffffffffffffffffffffffdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddfffff
    ddddddbbbbbbbbbbbbbbccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbddddddddfffffffffffffffffddddddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccbbbbbbbbbdddddddf
    dddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbddddddfffffffffffddddbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccbbbbbbbbbdddd
    bbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbdffffddddddbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbd
    bbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbddddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbb
    bbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbdddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdbbbccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddddddddddddddddccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbccccccccccccccccccccccccccccccccccccddddbbbbbbdddddddddddddddddddbbbbbbbbbbbbdddddddddddddddd
    cccccccccdddddddbbbbbbbdddddddddddddddddddddcccccccccccccccccccbbccccccccccccccccccccccccccccccccccccdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddd
    cccccccdddbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccccccddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddd
    cccdddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddccccccccccccccccccccccccccccccccddddddddbbbbbbbbbbbbbbbbbbcccccccccccccccccccccbbbbbbbbbbbbbbbbbbbddd
    dddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddcccccccccccccccccccdddddddddbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbb
    dddbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddccccccccccbbbdddbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbb
    ddbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddcbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbb
    bbbbbbbbccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbb
    bbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbddddbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccb
    bbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbddddddbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbddddddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbddddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbdddccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbdcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbdddcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbdddccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbddccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbddcccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbddccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddcccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddcccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbdddcccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbdddcccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbdddccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbdddcccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddddccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddddcccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbddddccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbdddccccccccccccccccccccccccccccccccccccccccccc
    `)
music.play(music.createSong(assets.song`Peaceful_Soundtrack1`), music.PlaybackMode.LoopingInBackground)
averysprite = sprites.create(assets.image`Avery`, SpriteKind.Player)
averysprite.setStayInScreen(true)
game.showLongText("What a beautiful sky.", DialogLayout.Bottom)
game.showLongText("But was the sky always this purple?", DialogLayout.Bottom)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . . 5 5 5 . . . . . . 
    . . . . . . . 5 . 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Teleporter)
mySprite2.setPosition(4, 67)
game.showLongText("A star has appeared.", DialogLayout.Bottom)
game.showLongText("Touch it.", DialogLayout.Bottom)
averysprite.setPosition(76, 61)
animation.runImageAnimation(
averysprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . c c c b b c . . . . . 
    . . . . c c d c c b c c . . . . 
    . . . . c c c d c c c c . . . . 
    . . . c . c b d d b c . c . . . 
    . . . . . . c d d c . . . . . . 
    . . . . . b b b b b b . . . . . 
    . . . . . c c c c c c . . . . . 
    . . . . . b b b b b b . . . . . 
    . . . . . d c c c c d . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . . f . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
500,
true
)
