namespace SpriteKind {
    export const Teleporter = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const Teleporter_2 = SpriteKind.create()
    export const spritetest1 = SpriteKind.create()
    export const heavenlystairs = SpriteKind.create()
    export const cloudpersonone = SpriteKind.create()
    export const cloudpersontwo = SpriteKind.create()
    export const ohwowstairsagain = SpriteKind.create()
    export const moongoddesnpc = SpriteKind.create()
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
    averysprite.setPosition(144, 67)
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
    game.showLongText("?", DialogLayout.Bottom)
    game.showLongText("A person?", DialogLayout.Bottom)
    game.showLongText("Talk to the person.", DialogLayout.Bottom)
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
    if (game.ask("A: Why is everything purple..", "B: I want to see the world in..")) {
        game.showLongText("Avery: I want to know why I can only see purple.", DialogLayout.Bottom)
        game.showLongText("???: Perhaps asking the cloud people would answer your question.", DialogLayout.Bottom)
    } else {
        game.showLongText("Avery: I want to know how to see the world in different colors.", DialogLayout.Bottom)
        game.showLongText("???: Perhaps asking the cloud people would answer your question", DialogLayout.Bottom)
    }
    sprites.destroy(blankguynpc)
    game.showLongText("...", DialogLayout.Bottom)
    game.showLongText("Cloud people?", DialogLayout.Bottom)
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
    game.showLongText("Another star appeared.", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.heavenlystairs, function (sprite, otherSprite) {
    scene.setBackgroundImage(assets.image`cloud place`)
    music.stopAllSounds()
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.LoopingInBackground)
    averysprite.setPosition(116, 37)
    sprites.destroy(STAIRS)
    cloudgirl = sprites.create(assets.image`CloudGirl`, SpriteKind.cloudpersonone)
    cloudgirl.setPosition(46, 33)
    cloudboy = sprites.create(assets.image`CloudGuy`, SpriteKind.cloudpersontwo)
    cloudboy.setPosition(99, 87)
    game.showLongText("?!?!", DialogLayout.Bottom)
    game.showLongText("Where am I?", DialogLayout.Bottom)
    game.showLongText("The stairs are gone..", DialogLayout.Bottom)
    game.showLongText("There are people.", DialogLayout.Bottom)
    game.showLongText("Try talking to them.", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cloudpersonone, function (sprite, otherSprite) {
    game.showLongText("???: A human?", DialogLayout.Bottom)
    game.showLongText("???: What is a human doing in the clouds?", DialogLayout.Bottom)
    if (game.ask("A: Clouds?", "B: Who are you?")) {
        game.showLongText("Avery: What do you mean clouds?", DialogLayout.Bottom)
        game.showLongText("Serta: Ah, my name is Serta. I'm a cloud person.", DialogLayout.Bottom)
    } else {
        game.showLongText("Avery: Who are you?", DialogLayout.Bottom)
        game.showLongText("Serta: I'm Serta, a cloud person!", DialogLayout.Bottom)
    }
    game.showLongText("Serta: Is there a reason why you are talking to me?", DialogLayout.Bottom)
    if (game.ask("A: Can you help me?", "B: I can only see purple.")) {
        game.showLongText("Avery: Can you help me figure out why I can only see purple?", DialogLayout.Bottom)
        game.showLongText("Serta: Oh! That's something I don't know.. sorry..", DialogLayout.Bottom)
    } else {
        game.showLongText("Avery: I can only see purple.", DialogLayout.Bottom)
        game.showLongText("Serta: Purple? That's strange.", DialogLayout.Bottom)
    }
    game.showLongText("Serta: Perhaps you should ask around!", DialogLayout.Bottom)
    game.showLongText("Serta: Goodluck on your search for answers!", DialogLayout.Bottom)
    sprites.destroy(cloudgirl)
    game.showLongText("...", DialogLayout.Bottom)
    game.showLongText("She was nice.", DialogLayout.Bottom)
    game.showLongText("There's one more person to talk to.", DialogLayout.Bottom)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cloudpersontwo, function (sprite, otherSprite) {
    game.showLongText("???: ...", DialogLayout.Bottom)
    if (game.ask("A: Can you help me?")) {
        game.showLongText("Avery: Can you help me?", DialogLayout.Bottom)
        game.showLongText("???: ...", DialogLayout.Bottom)
    }
    game.showLongText("???: Who are you?", DialogLayout.Bottom)
    if (game.ask("A: I'm Avery.", "B: Who are YOU?")) {
        game.showLongText("Avery: I'm Avery.", DialogLayout.Bottom)
        game.showLongText("Casto: I'm Casto.", DialogLayout.Bottom)
    } else {
        game.showLongText("Avery: Who are YOU?", DialogLayout.Bottom)
        game.showLongText("Casto: ..I'm Casto.", DialogLayout.Bottom)
    }
    if (game.ask("A: Can you help me?")) {
        game.showLongText("Avery: Can you help me?", DialogLayout.Bottom)
        game.showLongText("Casto: Sure, with what =?", DialogLayout.Bottom)
    }
    if (game.ask("A: I can only see purple.")) {
        game.showLongText("Avery: I can only see purple.", DialogLayout.Bottom)
        game.showLongText("Casto: Only one color? Hm..", DialogLayout.Bottom)
    }
    game.showLongText("Casto: It must be because of the Moon Goddess.", DialogLayout.Bottom)
    if (game.ask("A: Moon Goddess?")) {
        game.showLongText("Avery: Moon Goddess?", DialogLayout.Bottom)
        game.showLongText("Casto: Yes the Moon Goddes.", DialogLayout.Bottom)
    }
    game.showLongText("Casto: The reason humans might only see one color is because of the Moon Goddess", DialogLayout.Bottom)
    game.showLongText("Casto: The moon hides the sun, which hides all the color for humans.", DialogLayout.Bottom)
    game.showLongText("Casto: However, the Moon Goddess never seems to leave for the sun to appear.", DialogLayout.Bottom)
    if (game.ask("A: Why?")) {
        game.showLongText("Avery: Why?", DialogLayout.Bottom)
        game.showLongText("Casto: I heard she is mourning over someone special to her.", DialogLayout.Bottom)
    }
    game.showLongText("Casto: Good luck finding her.", DialogLayout.Bottom)
    sprites.destroy(cloudboy)
    sprites.destroy(cloudgirl)
    game.showLongText("...", DialogLayout.Bottom)
    game.showLongText("That's all the cloud people.", DialogLayout.Bottom)
    mySprite = sprites.create(assets.image`stairsagainwow`, SpriteKind.ohwowstairsagain)
    mySprite.setPosition(131, 8)
    game.showLongText("More stairs.", DialogLayout.Bottom)
    game.showLongText("Climb the stairs.", DialogLayout.Bottom)
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.ohwowstairsagain, function (sprite, otherSprite) {
    scene.setBackgroundImage(img`
        bbbbbbbbbcccccccccccccccccfffffbbbbbbcccccccfffffffffffffffffffffff11111111111111111111111111fffffffffffffffffffffffffccccc11bbbbcffffffcccccccccc1cccbbbbbbbbbb
        bbbbbbbbbbbbccccccccccccccfffffbbb11bbccccccfffffffffffffffffffff111111111111111111111111111111fffffffffffffffffffffffccc11bbbbbbcffffffccccccccccccbbbbbbbbbbbb
        bbbbbbbbbbbbbbbcccccccccccffffffbbb1111bbcccffffffffffffffffffff11111111111fffffff1111111111111fffffffffffffffffffffffcc1bbbbbbb1cffffffcccccccccccbbbbbb1bbbbbb
        bbbbbb1bbbbbbbbbbcccccccccfffffffc1bbb11bbbbfffffffffffffffffff1111111111ffffffffff1111111111111fffffffffffffffffffffbbbbbbbbbcc1cffffffccccccccbbbbbbbbb1bbbbbb
        bbbbb111bbbbbbbbbbbcccccccfffffffc1bbbbbbbbbfffffffffffffffff11111111111ffffffffffff1111111111111ffffffffffffffffffbbbbbbbbbcccc1cffffffcccccccbbbbbbbb11111bbbb
        bbbb1b1bbbbbbbbbbbbbbcccccfffffffc1cccbbbbbbffffffffffffffff1111111111fffffffffffffff1111111111111fffffffffffffffffbbbbbbbcccccc1cffffffcccccbbbbbbbbbbbb1bbbbbb
        ffbbbb1bbbbbbbbbbbbbbbbcccfffffffc1ccccccbbbffffffffffffffff111111111ffffffffffffffffff111111111111ffffffffffffffffbbbbccccccccc1cffffffccccbbbbbbbbbbbbb1bbbbbf
        fffbbbbbbbbbb1bbbbbbbbbbbbfffffffc1cccccccccfffffffffffffff111111111ffffffffffffffffffff111111111111ffffffffffffffffffcccccccccc1cffffffccbbbbbbbbbbbbbbbbbbbbbf
        ffffbbbbbbbbb1bbbbbbbbbbbbbffffffc1cccccccccffffffffffffff111111111fffffffffffffffffffffff11111111111fffffffffffffffffcccccccccc1cfffbbbbbbbbbbbbbbbbb1bbbbbbbbf
        ffffccbbbbbbbb1bbbbbbbbbbbbbfffffc1cccccccccffffffffffff1111111111fffffffffffffffffffffffff11111111111ffffffffffffffffcccccccccc1cfffbbbbbbbbbbbbbbbbb1bbbbbbbbf
        ffffcc1bbbbbbb111bbbbbbbbbbbfffffc1cccccccccffffffffffff111111111ffffffffffffffffffffffffffff1111111111fffffffffffffffcccccccccc1cfffbbbbbbbbbbbbbbbbbbbbbbbbfff
        ffffcc11bbbbbbbbbbbbbbbb1bbbfffffc1cccccccccfffffffffff111111111ffffffffffffffffffffffffffffff1111111111ffffffffffffffcccccccccc1cfffbbbbbbbbbbbbbbbbbbbbbbbffff
        ffffcc111cbbbbbbbbbbbbbbbbbbfffffc1cccccccccffffffffff1111111111ffffffffffffffffffffffffffffffff11111111ffffffffffffffcccccccccc1cfffbbbbb1bbbbbbbbbbbbbbbccffff
        ffffcc111cccbbbbbbbbbbbbbbbffffbbb1cccccccccfffffffff111111111fffffffffffffffffffffffffffffffffff11111111fffffffffffffcccccccccc1cfffbbbbbbbbbbbbbbbbbbb11ccffff
        ffffcc111cccccbbbbbbbbbbbbbffffbbb1cccccccccffffffff111111111fffffffffffffffffffffffffffffffffffff11111111ffffffffffffcccccccccc11fffbbbbbbbbbbbbbbbbcc111ccffff
        ffffcc111ccccccccbbbbbbbbbfffffbbb11ccccccccfffffff11111111fffffffffffffffffffffffffffffffffffffffff1111111fffffffffffccccccccc1bbffffffbbbbbbbbccccccc111ccffff
        ffffcc111ccccccccccccbbbbbffffffbbb111ccccccfffffff111111ffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffcccccccc1bbbffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccffffffbbbbb1bcccccffffff111fffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffcccccc11bbbbffffffccccccccccccccc111c1ffff
        ffffcc111cccccccccccccccccfffffffbbbb11bbcccffffff111fffffffffffffffffffffffffffffffffffffffffffffffffff11111fffffffffccccc11bbbbbffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffffcbbbbbbbbbbbffff1111ffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffccc111bbbbbcffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffffc1ccbbbbbbbbffff111111fffffffffffffffffffffffffffffffffffffffffffffff1111111fffffffffcccbbbbbbb1cffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffffc1ccccbbbbbbffff1111111ffffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffbbbbbbbbbc1cffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffffc1cccccccccfffff11111111ffffffffffffffffffffffffffffffffffffffffffff1111111111ffffbbbbbbbbbbccc1cffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffffc1cccccccccffff111111111fffffffffffffffffffffffffffffffffffffffffff11111111111ffffbbbbbbbbccccc1cffffffccccccccccccccc111ccffff
        ffbbbbbb1cccccccccccccccccfffffffc1cccccccccffff1111111111fffffffffffffffffffffffffffffffffffffffffff1111111111ffffbbbbbcccccccc1cffffffccccccccccccccc111ccffff
        ffbbbbbbbbbcccccccccccccccfffffffc1cccccccccffff111111111fffffffffffffffffffffffffffffffffffffffffffff1111111111ffffffcccccccdcc1cffffffccccccccccccccc111ccffff
        fbbbbbbbbbbbbcccccccccccccfffffffc1cccccccccffff11111111fffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffcccccccccc1cffffffccccccccccccccbbbbbbbfff
        fbbbbbbbbbbbbcccccccccccccfffffffc1cccccccccffff1111111fffffffffffffffffffffffffffffffffffffffffffffffff11111111ffffffcccccccccc1cffffffcccccccccccccbbbbbbbbfff
        fbbbbbbbbbbb1bccccccccccccfffffffc1cccccccccffff111111fffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffcccccccccc1cffffffccccccccccccbbbbbbbbbfff
        fbbbbbbbbbb11bbcccccccccccfffffffc1cccccccccffff11111fffffffffffffffffffffffffffffffffffffffffffffffffffff111111ffffffccccccccc1bbffffffcccccccccccbbbbbbbbbbfff
        fbbbbbbbb1b111bbccccccccccfffffbbb1cccccccccffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffcccccc111bbbffffffccccccccccbbbbbbbbbbbbff
        fbbbbbbbb11111bbbcccccccccfffffbb11bccccccccffff1111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111ffffffcccccc11bbbbffffffcccccccccbbbbbbbbbbbbbff
        ffbbbbbbbbb1bbbbbcccccccccfffffbbb111bccccccffff1111fffffffffffffffffffffffffffffffffffffffffffffffffffffffff111ffffffccccc11bbbbbffffffccccccccbbb11bbbbbbbbbff
        ffbbbbbbbbbbbbbbbbccccccccffffffbbbb111bbbbbbfff111ffffffffffffffffffffffff1111111111fffffffffffffffffffffff11111fffffcccc11bbbbbbffffffccccccccbb11bbbbbbbbbbff
        ffffbbbbbbbbbbbbbbbbccccccfffffffbbbbbbbbbbbbfff11111111fffffffffffffffff11111111111111ffffffffffffffffffff111111fffffccccbbbbbbfcffffffccccccbbb111bbbbbbbbbbff
        ffffcbbbbbbbbbbbbbbbbcccccfffffffc1bbbbbbbbbbfff11111111fffffdd11ffffffff11111111111111ffffffff11ddfffffff1111111fffffcccbbbbbbc1cffffffcccccbbbbbb1bbbbbbbbbbff
        ffffccbbbbbbbbbbbbbbbcccccfffffffc1cccccccbbbfff11111111ffffdd1111ffffff1111111111111111ffffff1111ddffffff1111111fffffccbbbbbbbc1cffffffccccbbbbbbbb11bbbbbbbfff
        ffffcc1bbbbbbbb111bbbbccccfffffffc1cccccccccffff1111111fffffd11111ffffff1111111111111111ffffff11111dffffff1111111fffffbbbbbbbccc1cffffffcccbbbbbbbbbbbbbbbbbbfff
        ffffcc1bbbbbbbb111bbbbbcccfffffffc1cccccccccffff1111111fffffdd111ffffff111111111111111111ffffff111ddffffff1111111fffbbbbbbbccccc1cffffffccbbbbbbbbbbbbbbbbbbffff
        ffffcc11bbbbbbbb11bbbbbbccfffffffc1cccccccccfff1111111fffffffffffffffff111111111111111111fffffffffffffffff1111111fffbbbbbbcccccc1cffffffcbbbbbbbbbbbbbbbbbbbffff
        ffffcc111cbbbbbbbbbbbbbbbcfffffffc1cccccccccfff1111111fffffffffffffffff111111111111111111fffffffffffffffff1111111fffbbbbcccccccc1cfffffbbbbb11bbbbbbbbbbb1ccffff
        ffffcc111cccccbbbbbbbbbbbcfffffffc1cccccccccfff111111ffffffffffffffffff111111111111111111fffffffffffffffff1111111fffffcccccccccc1cffffbbbbbbbbbbbbbbbbb111ccffff
        ffffcc111cccccccbbbbbbbbbbbffffffc1cccccccccfff11111ffffffffcbbbbbfffff111111111111111111fffffbbbbbcffffff1111111fffffcccccccccc1cffffbbbbbbbbbbb1bbccc111ccffff
        ffffcc111ccccccccbbbbbb1bbbffffffc1cccccccccfff11111fffffffcccccbffffff111111111111111111ffffffbccccfffffff111111fffffcccccccccc1cffffbbbbbbbbbbbbbcccc111ccffff
        ffffcc111ccccccccccbbbbbbbbbffffbbbbccccccccfff11111fffffffcccccbffff1111111111111111111111ffffbcccccffffff11111ffffffcccccccccc1cfffffbbbbbbbbcccccccc111ccffff
        ffffcc111cccccccccccbbbbbbbbffffbbb1ccccccccfff11111fffffffcccccffff1111dddddddddddddddd1111fffccccccffffff11111ffffffcccccccccc1cfffffbbbbbccccccccccc111ccffff
        ffffcc111cccccccccccccbbbbbbffffbbbb1cccccccfff11111fffffbbcccccbbb1111dddddddddddddddddd1111bbbcccccbbffff11111ffffffcccccccccc1cffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffffbbb11ccccccfff11111ffbbbbbcccccbbb1111dddddddddddddddddd1111bbbcccccbbffff11111ffffffcccccccccc1cffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffffbbbb11cccccff11111fbbbbbbbcccccbbb1111dddddddddddddddddd1111bbbcccccbbbbbbb11111fffffccccccccc1bbbfffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffffcbbbb11ccccf111111fbbbbbbbcccccbbb1111dddddddddddddddddd1111bbbcccccbbbbbbb11111fffffcccccccc11bbbfffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffffc1bbbb1bbcc1111111fbbbbbbbbcccccbb1111bbbbbbbbbbbbbbbbbb1111bbbcccccbbbbbbb11111fffffcccccccc1bbbbfffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffffc1cbbbbbbbb1111111fbbbbbbbbcccccbb1111bbbbbbbbbbbbbbbbbb1111bbcccccbbbbbbbbf11111ffffccccc111bbbbbfffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffffc1ccbbbbbbbb111111fbbbbbbbbbcccccbb111111111111111111111111bbbccccbbbbbbbbbf11111ffffcccc11bbbbbcffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffffc1ccccbbbbbbb11111fbbbbbbbbbbccccbbbbbb1111111111111111bbbbbbccccbbbbbbbbbbf11111ffffcccbbbbbbb1cffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffffc1ccccccbbbbb11111fffbbbbbbbbbccccbbbbb1111111111111111bbbbbccccbbbbbbbbbbbf111111fffbbbbbbbbbc1cffffffccccccccccccccc111ccffff
        ffffccccccccccccccccccccccfffffffc1ccccccccbbb11111fffbbbbbbbbbbcccbbbbb1111111111111111bbbbbcccbbbbbbbbbbbbf111111ffbbbbbbbbccc1cffffffccccccccccccccccccccffff
        ffbbbbccccccccccccccccccccfffffffc1ccccccccc11111111fff1111bbbbbbbbbbbbbbb111111111111bbbbbbbbbbbbbbb111fffff111111fbbbbbbbbcccc1cffffffccccccccccccccccbbbbffff
        ffbbbbbcccccccccccccccccccfffffffc1ccccccccc11111111fffffff111111111bbbbbbbbbbbbbbbbbbbbbbb1111111111fffcfff1111111fbbbbbccccccc1cffffffcccccccccccccccbbbbbbfff
        ffbbbbbbccccccccccccccccccfffffffc1ccccccccc111111111fccccffffffffff11bbbbbbbbbbbbbbbbbbb11fffffffffffcccfff1111111fbbbccccccccc1cffffffcccccccccccccbbbbbbbbfff
        ffbbbbbbbcccccccccccccccccffffff1d1cccccccccf11111111fcccccccccccccfff1fffffffffffffffff1fffccccccccccccff111111111fffcccccccccc1cffffffcccccccccccccbbbbbbbbfff
        fbbbbbbbbbccccccccccccccccfffff1dd1cccccccccff11111111fccccccccccccfbb1bbbbbbbbbbbbbbbbb1bbfccccccccccccff111111111fffcccccccccc1cffffffccccccccccccbbb1bbbbbfff
        fbbb1bbbbbbbccccccccccccccfffff1ddddccccccccfff11111f111cccccccccccfbb1bbbbbbbbbbbbbbbbb1bbfcccccccccccff111111111ffffcccccccccc1d1fffffcccccccccccbbbb111bbbfff
        fbb1111bbbbbccccccccccccccfffff1dddddcccccccfffffffffff1ccccccccccfff1fffffffffffffffffff1fffcccccccccffa111111fffffffccccccccccdd1fffffccccccccccbbb111bbbbbfff
        fbbb1bbbbbbbbcccccccccccccfffff1ddddddccccccffffffffff1ffcccccccccfbb1bbbbbbbbbbbbbbbbbbb1bbfcccccccccffaa1fffffffffffcccccccccddd1fffffcccccccccbbbbbb1bbbbbfff
        ffbb1bbbbbbbbbbcccccccccccfffff11ddddddcccccffffffffff1ffcccccccccfbb1bbbbbbbbbbbbbbbbbbb1bbfcccccccfffaaa1fffffffffffcccccccddddd1fffffccccccccbbbbbbbbbbbbbfff
        ffbbbbbb1bbbbbbbbbccccccccfffffff11dddddddccfffffffff1aaffcccccccfff1fffffffffffffffffffff1fffcccccfff3aaaa1ffffffffffcccccddddddd1fffffcccccccbbbbbbbbbbbbbbfff
        ffbbbbbb11111bbbbbbbccccccfffffffc111111dddcfffffffff1aaaffffccccfbb1bbbbbbbbbbbbbbbbbbbbb1bbfccccff333aaaa1ffffffffffcccddddddddd1fffffccccccbbbbb1bbbbbbbbbfff
        fffbbbbbbbbb1bbbbbbbbbbbccfffffffcccccc111dddfffffff1aaaa3ffffffffbb1bbbbbbbbbbbbbbbbbbbbb1bbffffffa3333aaa1ffffffffffdddddddddd111fffffcccccbbbbbbbbbbbbbbbffff
        fffbbbbbbbbbbbbbbbbbbbbbbbbffffffcccccccc11ddfffffff1aaaa333aaaaafbb1bbbbbbbbbbbbbbbbbbbbb1bbfaaaaaa3333aaaa1fffffffddddd1111111ccffffffccccbbbbbbbbbbbbbbbcffff
        ffffbbbbbbbbbbbbbbbbbbbbbbbffffffccc55111c11dfffffff1aaa3333aaaaafffffffffffffffffffffffff1fffaaaaaaa3333aaa1ffffffffdd11cccccccccffffffccbbbbbbbbbbbbbbbbbcffff
        ffffcbbbbbbbbbbbbbbbbbbbbbbffffffccc55551cc11ffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1fffffffd11c55111ccccffffffcbbbbb11bbbbbbbbb1ccffff
        ffffcc111cccbbbbbbbbbbbbbbbffffffccc55551cc11ffffff1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa333aaaa1fffffff11cc55551cccddfffffbbbbbb1bbbbbbbbb11ccffff
        ffffcc111cccccccccccccccccfffffddccc55551cccffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1ffffffdccc55551cccddfffbbbbbbbbbbbbbbbbb111ccffff
        ffffcc111cccccccccccccccccfffffddccc55555cccffffff1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1ffffffdccc55551ccdddfffbbbbbbbbbbbbbcccc111ccffff
        ffffcc111cccccccccccccccccfffffddcccccccccccfffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1ffffffccc55555ccdddfffbbbbbbbbbbccccccc111ccffff
        ffffcc111cccccccccccccccccfffffddddcccccccccffffa1aaaa333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1ffffffcccccccccddddfffbbbbbbbcccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffddddddccccddcffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1ffffffccccccccdddddfffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffddddddddddddddfff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaafffffdddccccccdddddfffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffddddddddddddddfffaaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1ffffdddcccccddddddfffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffddddddddddddddff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1fffddddddddddddddfffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffdddddddddddddff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1fffdddddddddddddffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccffffffffddddddddddff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1fffddddddddddddffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccffffffffffffffffffffaaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa333aaaa1ffffdddddddddffffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffffffffffffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1ffffffffffffffffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccffffffffffffffffffa1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1ffffffffffffffffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccffffffffffffffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1afffffffffffffffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccffffffffffffffffff1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1fffffffffffffffffffccccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffffffffffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1affffffffffffffffffccccccccccccccc111ccffff
        ffbbbbb11cccccccccccccccccfffffffffffffffff1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1ffffffffffffffffffccccccccccccccc111ccffff
        ffbbbbbb1cccccccccccccccccffffffffffffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1ffffffffffffffffffccccccccccccccc111ccffff
        ffbb1bbbbcccccccccccccccccffffffffffffffff1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1fffffffffffffffffccccccccccccccc111ccffff
        fbbb111bbbccccccccccccccccfffffffffffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa333aaaa1fffffffffffffffffcccccccccccccccbbbbbffff
        fbbb1bbbbbbcccccccccccccccfffffffffffffff1aaaa333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1ffffffffffffffffccccccccccccccbbbbbbffff
        fbbbbbbbbbbcccccccccccccccffffffffffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1ffffffffffffffffcccccccccccccbbbbbbbffff
        fbbbbbbb1bbbbcccccccccccccffffffffffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1fffffffffffffffccccccccccccbbbb1bbbffff
        fbbbbbbb11bbbbbcccccccccccfffffffffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1fffffffffffffffccccccccccbbbbb111bbffff
        ffbbbbbbb111bbbbbcccccccccfffffffffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1affffffffffffffcccccccccbbbbbbb1bbbffff
        ffbbbbbbbbbbbbbbbbbbccccccfffffffffffff1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1ffffffffffffffccccccccbbbbbbbb1bbbffff
        ffbbbbbbbbbbbbbbbbbbbcccccffffffffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1afffffffffffffcccccccbbbbbbbbbbbbbffff
        ffffcc111ccbbbbbbbbbbbbcccffffffffffff1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1fffffffffffffccccccbbbbbbbbbbbbbbffff
        ffffcc111cccccbbbbbbbbbbbcfffffffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1affffffffffffcccccbbbbb1bbbbbbbbcffff
        ffffcc111ccccccccbbbbbbbbbbffffffffff1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1ffffffffffffcccbbbbbb11bbbbbb1ccffff
        ffffcc111ccccccccccccbbbbbbfffffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa333aaaa1ffffffffffffcbbbbbbb11bbbbbbb1ccffff
        ffffcc111ccccccccccccccbbbbfffffffff1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1fffffffffffbbb1bbbbbbbbbbb111ccffff
        ffffcc111cccccccccccccccccfffffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1fffffffffbbbbb11bbbbbbbccc111ccffff
        ffffcc111cccccccccccccccccfffffffff1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1afffffffbbbbbbbb1bbbbccccc111ccffff
        ffffcc111cccccccccccccccccffffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1fffffffbbbbbbbbbbbccccccc111ccffff
        ffffcc111cccccccccccccccccffffffff1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1affffffbbbbbccccccccccccc111ccffff
        ffffcc111cccccccccccccccccfffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1ffffffbbbccccccccccccccc111ccffff
        fff111111cccccccccccccccccfffffff1aaaa333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1affffffffccccccccccccccc1111cffff
        fff1dddd1cccccccccccccccccffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1ffffffffcccccccccccccc1111111fff
        ff1ddddd11ccccccccccccccccffffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1afffffffccccccccccccc11ddddd1fff
        ffddddddd1ccccccccccccccccffffff1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1fffffffcccccccccccc11dddddddfff
        ffddddddd11cccccccccccccccfffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa333aaaa1fffffffcccccccccc11dddddddddfff
        ffdddddddd11ccccccccccccccfffff1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1affffffcccccccc1111dddddddddfff
        ffddddddddd111ccccccccccccffff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1ffffffcccccc111ddddddddddddfff
        ffdddddddddd1111ccccccccccffff1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1afffffcccc111ddddddddddddddfff
        ffdddddddddddd1111ccccccccfff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1fffff11111ddddddddddddddddfff
        ffddddddddddddddd111111111fff1aaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaa1afff11ddddddddddddddddddddfff
        ffddddddddddddddddddddddddff1aaaa3333aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa3333aaaa1fff1dddddddddddddddddddddfff
        `)
    music.stopAllSounds()
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.LoopingInBackground)
    moongoddess = sprites.create(assets.image`BackupDoNotUse`, SpriteKind.moongoddesnpc)
    moongoddess.setPosition(0, 0)
    averysprite.setPosition(0, 0)
    game.showLongText("?!?!?!", DialogLayout.Bottom)
    game.showLongText("You got teleported to another mysterious place.", DialogLayout.Bottom)
    game.showLongText("There is a mysterious lady.", DialogLayout.Bottom)
    game.showLongText("Talk to the mysterious lady.", DialogLayout.Bottom)
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
    game.showLongText("...", DialogLayout.Bottom)
    game.showLongText("The star disappeared.", DialogLayout.Bottom)
    STAIRS = sprites.create(assets.image`myImage2`, SpriteKind.heavenlystairs)
    STAIRS.setPosition(124, 52)
    game.showLongText("Stairs appeared..?", DialogLayout.Bottom)
    game.showLongText("Climb the stairs.", DialogLayout.Bottom)
})
let moongoddess: Sprite = null
let mySprite: Sprite = null
let cloudboy: Sprite = null
let cloudgirl: Sprite = null
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
averysprite = sprites.create(assets.image`Merlin`, SpriteKind.Player)
game.showLongText("What a beautiful sky.", DialogLayout.Bottom)
game.showLongText("But was the sky always this purple?", DialogLayout.Bottom)
game.showLongText("Perhaps I should explore.", DialogLayout.Bottom)
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
game.showLongText("A star appeared.", DialogLayout.Bottom)
game.showLongText("Touch the star.", DialogLayout.Bottom)
averysprite.setStayInScreen(true)
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
