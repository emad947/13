let player = game.createSprite(0, 0)
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        player.set(LedSpriteProperty.Y, i)
        player.set(LedSpriteProperty.X, j)
        basic.pause(400)
    }
}
