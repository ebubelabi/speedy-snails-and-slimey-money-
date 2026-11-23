function WhoIsIt (UserName: string) {
    MyName = UserName
    return UserName
}
let MyName = ""
game.splash("You are in debt because of some bad decisions")
game.splash("You need 20K to clear it")
game.splash("Your friend lent you $100")
WhoIsIt(game.askForString("What is your name, racer?"))
game.splash("Good luck, " + MyName)
