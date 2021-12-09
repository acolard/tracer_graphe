basic.forever(function () {
    basic.showNumber(sonar.ping(
    DigitalPin.P0,
    DigitalPin.P0,
    PingUnit.Centimeters
    ))
    control.waitMicros(1000000)
})
