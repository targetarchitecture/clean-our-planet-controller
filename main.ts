input.onButtonPressed(Button.A, function () {
    radio.sendValue("tune", 1)
    music.play(music.tonePlayable(311, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(740, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    radio.sendValue("tune", 2)
})
radio.setGroup(2)
basic.showLeds(`
    # # # . .
    . . # . .
    # # # # #
    . # # # .
    # # # # #
    `)
radio.setTransmitPower(7)
