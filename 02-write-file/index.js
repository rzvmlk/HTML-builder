const fs = require('fs');
const path = require('path');

const process = require('process');

const textFile = path.join(__dirname, './text.txt');
const OutputFile = fs.createWriteStream(textFile);

const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('start' , () => console.log('Hi! Enter your text here.'));
emitter.emit('start');

const InputFile = process.stdin;
InputFile.on('data', (input) => {
    if (input.includes('exit')) 
    process.emit('SIGINT');
});
const finish = () => {
    OutputFile.end();
    InputFile.end();
    process.exit();
};
  
process.on('SIGINT', finish);

InputFile.pipe(OutputFile);