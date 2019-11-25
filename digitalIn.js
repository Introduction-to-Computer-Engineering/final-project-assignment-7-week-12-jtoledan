led.enable(false)//disables led matrix
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P12) == 1) {//checks if button is pushed, then the led is lit up
        pins.analogWritePin(AnalogPin.P0, 1023)
    }
    else {//if button is not pushed, then the led does not light up
        pins.analogWritePin(AnalogPin.P0, 0)
    }
    
})
