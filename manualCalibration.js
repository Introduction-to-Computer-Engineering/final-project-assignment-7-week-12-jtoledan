let reading : number = 0;

class Moisture {
    constructor() { };//default constructor
    
    getReading() {
        pins.digitalWritePin(DigitalPin.P12, 1);//powers sensor
        reading = pins.analogReadPin(AnalogPin.P0);//takes the reading
        pins.digitalWritePin(DigitalPin.P12, 0);//turns off sensor

        let i : number = pins.map(reading, 8, 815, 0, 4);//maps reading on a scale of 0-4
        this.ledRow(i);//displays row that corresponds with reading
        this.fillRows(i);//displays all rows under row that corresponds with reading

    }

    fillRows(r  : number): void { //displays all rows of leds under i using ledRow function;
        for (let i = r; i >= 0; i--) {
            this.ledRow(i);
        }
    }

    ledRow(r: number): void {//displays a row of leds on the matrix
        led.plot(0, 4 - r);
        led.plot(1, 4 - r);
        led.plot(2, 4 - r);
        led.plot(3, 4 - r);
        led.plot(4, 4 - r);
    }
}

basic.forever(function () {//continually running

    let test = new Moisture();//instanciates Moisture class
    test.getReading();//runs getreading function
    basic.pause(1000);
    basic.clearScreen();
    basic.pause(100);
})
