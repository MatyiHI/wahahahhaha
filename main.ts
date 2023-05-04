namespace SpriteKind {
    export const Teleporter = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const Teleporter_2 = SpriteKind.create()
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
    mySprite.setPosition(80, 67)
    mySprite3 = sprites.create(img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ............................................fffffff.................................................
        ..........................................ff1111111fff..............................................
        ........................................ff111111111111ff............................................
        .......................................f111111111111111f............................................
        ......................................ff1111111111111111ff..........................................
        .....................................f1111111111111111111f..........................................
        .....................................f11111111111111111111f.........................................
        ....................................f111111111111111111111f.........................................
        ....................................f1111111111111111111111f........................................
        ....................................f1111111111111111111111f........................................
        ....................................f1111111111111111111111f........................................
        ....................................f1111111111111111111111f........................................
        ....................................f11fffff11111111fffff11f........................................
        ....................................f11fffff11111111fffff11f........................................
        ....................................f11fffff11111111fffff11f........................................
        ....................................f11fffff11dddd11fffff11f........................................
        ....................................f11fffff1dddddd1fffff11f........................................
        ....................................f1bbbb111111111111bbbb1f........................................
        .....................................fbbbb111111111111bbbb1f........................................
        .....................................fbbbb111111111111bbbb1f........................................
        .....................................ff11111111111111111111f........................................
        ......................................f1111111111111111111f.........................................
        .......................................f11111111111111111f..........................................
        ........................................f111111111111111ff..........................................
        .........................................ff111111111111ff...........................................
        ..........................................ffffffffffffff............................................
        .........................................fdddfffffffddf.............................................
        ........................................f1dddddddddddddf............................................
        .......................................f111ddddddddddd1f............................................
        .......................................f1111dddddddd1111f...........................................
        ......................................f111111dddd11111111f..........................................
        ......................................f111111111111111111ff.........................................
        ......................................f1111111111111111111f.........................................
        .....................................f11111111111111111111f.........................................
        .....................................f111111111111111111111f........................................
        .....................................f111111111111111111111f........................................
        .....................................f111111111111111111111f........................................
        .....................................f111111111111111f11111f........................................
        ....................................f111111f111111111ff1111f........................................
        ....................................f111111f1111111111f1111f........................................
        ....................................f11111ff1111111111f1111f........................................
        ....................................f11111f11111111111f1111f........................................
        ...................................f111111f11111111111f1111f........................................
        ...................................f111111f11111111111f11111f.......................................
        ...................................f111111f11111111111f11111f.......................................
        ...................................f111111f11111111111f11111f.......................................
        ...................................f11111f111111111111f11111f.......................................
        ...................................f11111f111111111111f11111f.......................................
        ...................................f11111f111111111111f11111f.......................................
        ...................................ff1111f111111111111f11111f.......................................
        .....................................f11ff111111111111f1111ff.......................................
        ......................................fffd111111111111ffffff........................................
        ........................................d11111111111111df...........................................
        ........................................f11111111111111ddf..........................................
        ........................................f11111111111111ddf..........................................
        ........................................f1111111111111111f..........................................
        ........................................f1111111111111111f..........................................
        ........................................f1111111111111111f..........................................
        ........................................f1111111111111111f..........................................
        ........................................f1111ddd111111111f..........................................
        ........................................f11111ddf11111111f..........................................
        ........................................f11111ddf11111111f..........................................
        ........................................f1111111f11111111f..........................................
        ........................................f1111111f11111111f..........................................
        ........................................f1111111f11111111f..........................................
        ........................................f1111111f11111111f..........................................
        ........................................f1111111f11111111f..........................................
        ........................................f1111111ff11111111f.........................................
        ........................................f1111111ff11111111f.........................................
        ........................................f111111f.ff1111111f.........................................
        ........................................f111111f..f1111111f.........................................
        ........................................f111111f..f1111111f.........................................
        ........................................f111111f...f111111f.........................................
        .........................................f11111f....f11111f.........................................
        .........................................f1111f.....ff1111f.........................................
        ..........................................fffff......f111ff.........................................
        ......................................................ffff..........................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        `, SpriteKind.NPC)
    mySprite3.setPosition(32, 59)
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
    if (game.ask("A: I want to know why I can only see purple", "B: I want to know how to see the world in different colors.")) {
        game.showLongText("Avery: I want to know why I can only see purple.", DialogLayout.Bottom)
        game.showLongText("???: Perhaps asking the cloud people would answer your question.", DialogLayout.Bottom)
    } else {
        game.showLongText("Avery: I want to know how to see the world in different colors.", DialogLayout.Bottom)
        game.showLongText("???: Perhaps asking the cloud people would answer your question", DialogLayout.Bottom)
    }
    sprites.destroy(mySprite3)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
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
    controller.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
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
    controller.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
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
    controller.moveSprite(mySprite)
    animation.runImageAnimation(
    mySprite,
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
    mySprite.setPosition(152, 67)
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
    mySprite2.setPosition(152, 67)
})
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
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
mySprite = sprites.create(assets.image`Merlin`, SpriteKind.Player)
mySprite.setPosition(78, 62)
animation.runImageAnimation(
mySprite,
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
