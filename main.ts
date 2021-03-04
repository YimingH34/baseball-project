input.onButtonPressed(Button.A, function () {
    out += 1
})
input.onButtonPressed(Button.AB, function () {
    ball += 1
})
input.onButtonPressed(Button.B, function () {
    strike += 1
})
let out = 0
let ball = 0
let strike = 0
basic.forever(function () {
    if (ball == 4) {
        ball = 0
        basic.showString("Walk")
        basic.showString("Walk")
    }
    if (out == 3) {
        ball = 0
        out = 0
        strike = 0
        basic.showString("Switch round")
        basic.showString("Switch round")
    }
    if (strike == 3) {
        out += 1
        strike = 0
        basic.showString("Out")
        basic.showString("Out")
    }
    basic.showString("Ball")
    basic.showNumber(ball)
    basic.showString("Strike")
    basic.showNumber(strike)
    basic.showString("Out")
    basic.showNumber(out)
})
basic.forever(function () {
	
})
