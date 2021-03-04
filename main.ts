// When A is pressed, the variable out increase by 1
input.onButtonPressed(Button.A, function () {
    out += 1
    basic.showString("Out")
})
// When you press A and B at the same time, the variable ball is changing by 1.
input.onButtonPressed(Button.AB, function () {
    ball += 1
    basic.showString("Ball")
})
// When B is pressed it will increase strike by 1
input.onButtonPressed(Button.B, function () {
    strike += 1
    basic.showString("Strike")
})
// When you shake the  microbit it displays the amount of out, strike and ball in the inning.
input.onGesture(Gesture.Shake, function () {
    basic.showString("Ball")
    basic.showNumber(ball)
    basic.showString("Strike")
    basic.showNumber(strike)
    basic.showString("Out")
    basic.showNumber(out)
})
// This is because you want all the variable to set to 0
let strike = 0
let ball = 0
let out = 0
out = 0
ball = 0
strike = 0
// Right here is the brains of the code, so right here, if the variable ball reaches 4, it will clear the variable ball and display walk, if the variable out reaches 3, then it will reset everything to 0 and if the variable reaches 3, it will reset strike to 0 and add 1 to the variable out. 
basic.forever(function () {
    if (ball == 4) {
        ball = 0
        basic.showString("Walk")
    }
    if (out == 3) {
        ball = 0
        out = 0
        strike = 0
        basic.showString("Switch round")
    }
    if (strike == 3) {
        out += 1
        strike = 0
        basic.showString("Out")
    }
})
