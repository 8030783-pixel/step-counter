let steps = 0
input.onButtonPressed(Button.A, function () {
    steps = 0
    music.play(music.stringPlayable("A C5 G F A B C5 C ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("lets go")
    steps = 0
    music.play(music.stringPlayable("C5 A B G - C C C ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
basic.forever(function () {
    basic.showNumber(steps)
})
