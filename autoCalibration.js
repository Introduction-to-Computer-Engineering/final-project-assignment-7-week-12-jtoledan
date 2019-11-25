let reading: number = 0;
let averageAir: number = 0;
let averageWater: number = 0;

class Moisture {
    
    constructor(){}; // default constructor
    calibrateAir() { //gets air reading
        basic.showArrow(4);//displays South symbol
        pins.digitalWritePin(DigitalPin.P12, 1);//powers sensor
        let air = pins.analogReadPin(AnalogPin.P0);//gets reading from sensor
        basic.pause(2000);
        pins.digitalWritePin(DigitalPin.P12, 0);//stops power to sensor
        return air;//returns reading
    }
    calibrateWater() {//gets water reading
        basic.showArrow(0);//displays North symbol
        pins.digitalWritePin(DigitalPin.P12, 1);//powers sensor
        let water = pins.analogReadPin(AnalogPin.P0);//gets reading from sensor
        basic.pause(2000);
        pins.digitalWritePin(DigitalPin.P12, 0);//stops power to sensor
        basic.clearScreen();
        basic.pause(2000);
        return water;//returns reading

    }
    getAverage() {//finds average of air and water readings
        let totalAir : number = 0;
        let totalWater : number = 0;
        totalAir = this.calibrateAir();//adds first air reading to air total
        totalWater = this.calibrateWater();//adds first water reading to water total 
        totalAir += this.calibrateAir();//adds second air reading to air total
        totalWater += this.calibrateWater();//adds second water reading to water total
        totalAir += this.calibrateAir();//adds third  air reading to  air total
        totalWater += this.calibrateWater();//adds third water reading to water total

        averageAir = totalAir / 3;//uses air total and divides by number of air readings
        averageWater = totalWater / 3;//uses water total and divides by number of water readings

    }
    getReading() {
        pins.digitalWritePin(DigitalPin.P12, 1);//powers sensor
        reading = pins.analogReadPin(AnalogPin.P0);//gets reading from sensor
        pins.digitalWritePin(DigitalPin.P12, 0);//stops power to sensor

        let i = pins.map(reading, averageAir, averageWater, 0, 4);//maps reading in a 0-4 range
        this.ledRow(i);// calls ledRow 
        this.fillRows(i);//calls fillRows
    }
    ledRow(r: number): void {//lights up the led row that corresponds with the reading
        led.plot(0, 4 - r);
        led.plot(1, 4 - r);
        led.plot(2, 4 - r);
        led.plot(3, 4 - r);
        led.plot(4, 4 - r);
    }
    fillRows(r: number): void {//lights up all led rows under the led row that corresponds with the reading
        for (let i = r; i >= 0; i--) {
            this.ledRow(i);
        }
    }
}


let test = new Moisture(); //instanciates Moisture class
test.getAverage();//calls get average
basic.showString("Calibration success");//sends success message
basic.forever(function () {//starts a continual loop after calibration is complete
    test.getReading();//calls get reading
    basic.pause(1000);
    basic.clearScreen();//clears led matrix
    basic.pause(100);
})
