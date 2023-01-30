input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
})
let otoceni = 0
radio.setGroup(16)
basic.forever(function () {
    otoceni = input.rotation(Rotation.Roll)
    radio.sendValue("zatoc", otoceni)
    serial.writeValue("otoceni", otoceni)
    basic.pause(100)
})
