const process = require('process');

//console.log(process);
//console.log("Environment Variables:" , process.env);
console.log("Architecture(32/64):" , process.arch);
console.log("CPU Usage:" , process.cpuUsage());

var spawn = require('child_process').spawn;
var usage = require('usage');

var ffmpeg = spawn('ffmpeg');
usage.lookup(ffmpeg.pid, function(err, usageInfo) {

    console.log(usageInfo); // { cpu: 2.4, memory: 100065280 }
});