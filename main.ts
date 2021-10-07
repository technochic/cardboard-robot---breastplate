input.onSound(DetectedSound.Quiet, function () {
    pins.servoWritePin(AnalogPin.P0, randint(38, 145))
})
led.enable(false)
pins.servoWritePin(AnalogPin.P0, 90)
let strip = neopixel.create(DigitalPin.P1, 17, NeoPixelMode.RGB)
loops.everyInterval(randint(1000, 4000), function () {
    pins.digitalWritePin(DigitalPin.P9, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P10, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P10, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P12, 0)
})
basic.forever(function () {
    while (true) {
        strip.showColor(neopixel.rgb(25, 0, 5))
        strip.show()
        for (let index = 0; index <= 17; index++) {
            strip.rotate(1)
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
            strip.setPixelColor(index - 1, neopixel.rgb(255, 0, 50))
            strip.setPixelColor(index + 1, neopixel.rgb(255, 0, 50))
            basic.pause(40)
            strip.show()
        }
    }
})
