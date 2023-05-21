player =game.create_sprite(0, 0)
for i in range (5):
    for j in range(5):
        player.set(LedSpriteProperty.Y,i)
        player.set (LedSpriteProperty.X,j)
        basic.pause(400)  
