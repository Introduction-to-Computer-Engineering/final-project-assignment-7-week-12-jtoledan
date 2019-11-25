class LightUpLED {
    
    constructor(){};//default constructor

    flash() {
        for (let index = 0; index <= 3071; index++) {//slowly lights up the leds
            basic.clearScreen();

            pins.analogWritePin(AnalogPin.P8, index);
            pins.analogWritePin(AnalogPin.P12, index);
            pins.analogWritePin(AnalogPin.P16, index);
            if (index == 2000) { //displays firework on 5x5 display
                for (let j = 0; j <= 255; j += 25.5) {//fades out firework pattern
                    led.plotBrightness(2, 2, j);
                    basic.pause(100);
                    led.plotBrightness(2, 1, j - 50);
                    led.plotBrightness(1, 2, j - 50);
                    led.plotBrightness(2, 3, j - 50);
                    led.plotBrightness(3, 2, j - 50);
                }


            }

        }

        
        for (let index = 3071; index >= 0; index--) {//fades out Leds slowly
            basic.clearScreen();
            pins.analogWritePin(AnalogPin.P8, index);
            pins.analogWritePin(AnalogPin.P12, index);
            pins.analogWritePin(AnalogPin.P16, index);
            if (index == 2000) { //starts firework pattern
                for (let j = 255; j >= 0; j -= 25.5) {//fades out firework battern
                    led.plotBrightness(2, 2, j);
                    basic.pause(100);
                    led.plotBrightness(2, 1, j + 50);
                    led.plotBrightness(1, 2, j + 50);
                    led.plotBrightness(2, 3, j + 50);
                    led.plotBrightness(3, 2, j + 50);
                }
            }
            basic.clearScreen();
        }
    }

    ledP8() {//lights up P8
        for (let i = 0; i <= 3071; i++) {
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P8, i);
            control.waitMicros(1000)

        }
        for (let i = 0; i >= 0; i--) {//fades P8
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P8, i);
            control.waitMicros(1000)
        }
    }


    ledP12() {//lights up P12
        for (let i = 0; i <= 3071; i++) {
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P12, i);
            control.waitMicros(1000)
        }
        for (let i = 3071; i >= 0; i--) {//fades P12
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P12, i)
            control.waitMicros(1000)
        }
    }


    ledP16() {//lights up P16
        for (let i = 0; i <= 3071; i++) {
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P16, i);
            control.waitMicros(1000)
        }
        for (let i = 3071; i >= 0; i--) {//fades P16
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P16, i);
            control.waitMicros(1000);
        }
    }
}

basic.forever(function () {

    //set pins that will be used to 0
    pins.analogWritePin(AnalogPin.P8, 0);
    pins.analogWritePin(AnalogPin.P12, 0);
    pins.analogWritePin(AnalogPin.P16, 0);

    
    let light = new LightUpLED();
    light.flash();//runs flash function
    light.ledP8();//runs led8 function
    light.ledP12();//runs ledP12
    light.ledP16();//runs ledP16
    light.ledP16();//runs led16
    light.ledP12();//runs led12
    light.ledP8();//runs led8
})
