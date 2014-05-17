var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/cu.usbmodemfa141", {
    baudrate: 9600
});
serialPort.on("open", function() {
    console.log('Arudino online!');
    serialPort.on('data', function(data) {

        var isBottleOn =  parseInt(data);
        if (isBottleOn) {
          console.log('Yes! > A Bottle is inside the container :-)');
        }
        else{
          console.log('No bottle in the container :-(')
        }

    });
});