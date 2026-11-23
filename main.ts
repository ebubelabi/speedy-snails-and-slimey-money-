game.splash("You made some bad bets and lost all of your money")
game.splash("You need to make back 20,000")
pause(100)
// This entire code will repeat until said target score is met (the user will be able to set this if they wish)
let moneyTotal = 1000
let targetMoney = 20000
let mySprite = sprites.create(img`
    .............ccfff..............
    ............cddbbf..............
    ...........cddbbf...............
    ..........fccbbcf............ccc
    ....ffffffccccccff.........ccbbc
    ..ffbbbbbbbbbbbbbcfff.....cdbbc.
    ffbbbbbbbbbcbcbbbbcccff..cddbbf.
    fbcbbbbbffbbcbcbbbcccccfffdbbf..
    fbbb1111ff1bcbcbbbcccccccbbbcf..
    .fb11111111bbbbbbcccccccccbccf..
    ..fccc33cc11bbbbccccccccfffbbcf.
    ...fc131c111bbbcccccbdbc...fbbf.
    ....f33c111cbbbfdddddcc.....fbbf
    .....ff1111fbdbbfddcc........fff
    .......cccccfbdbbfc.............
    .............fffff..............
    `, SpriteKind.Player)
mySprite.setPosition(80, 60)
mySprite.sayText("Welcome to my casino: The Apex!", 2000, true)
pause(3200)
mySprite.sayText("Your goal is to leave with $" + targetMoney, 2000, true)
pause(3000)
mySprite.sayText("We have some simple rules before you can start gambling.", 5000, true)
pause(6000)
mySprite.sayText("First, your max chance of winning ANY amount is 50%, and the percentage is randomized.", 5000, true)
pause(7000)
mySprite.sayText("Second, your losses are also multiplied by a random multiplier from .75 to 1.5", 5000, true)
pause(7000)
mySprite.sayText("That's all the rules!", 2000, true)
pause(2000)
mySprite.sayText("You are starting with $" + moneyTotal + " to gamble", 2000, true)
pause(3800)
mySprite.sayText("And without further ado…", 3000, true)
pause(4000)
mySprite.sayText("Let's see if you have what it takes to be an Apex!", 3000, true)
pause(4000)
let gambleAway = game.askForNumber("How much are you putting up?", 10)
let winProfit = game.askForNumber("How much do you want back? (Max: 10x or 1000%)", 10)
for (let index = 0; index < 100; index++) {
    if (winProfit <= 1000) {
        if (Math.percentChance(randint(0, 50.2))) {
            game.splash("You won, congrats!")
            winProfit = winProfit / 100
            moneyTotal = moneyTotal * winProfit
            game.splash("You now have $" + moneyTotal)
            if (moneyTotal >= targetMoney) {
                game.splash("Wow… you actually did it…")
                game.setGameOverEffect(true, effects.confetti)
                game.setGameOverPlayable(true, music.melodyPlayable(music.siren), true)
                game.setGameOverMessage(true, "YOU ARE A MILLIONAIRE!!!")
                game.gameOver(true)
            }
        } else {
            game.splash("Oof, better luck next time...")
            moneyTotal = moneyTotal - gambleAway * randint(0.75, 1.5)
            game.splash("You now have $" + moneyTotal)
            if (moneyTotal <= 0) {
                game.setGameOverMessage(false, "HAHA! BROKIE!!")
                game.gameOver(false)
            }
        }
    } else {
        game.splash("Hey, you can't do that! Cheater!")
        game.splash("Get out of my casino, libtard!")
        game.gameOver(false)
        game.setGameOverMessage(false, "You have been BANNED!")
        game.setGameOverPlayable(false, music.melodyPlayable(music.wawawawaa), true)
    }
    gambleAway = game.askForNumber("How much are you putting up?", 10)
    winProfit = game.askForNumber("How much do you want back? (110%, 150%, etc)", 10)
}
