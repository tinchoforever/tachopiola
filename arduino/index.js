var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/ttyACM2", {
    baudrate: 9600
});
serialPort.on("open", function() {
    console.log('open');
    serialPort.on('data', function(data) {
        console.log('data received: ' + data);
    });
});