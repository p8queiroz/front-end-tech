
//Path Module 
const path = require('path');
const pathObj = path.parse(__filename);
//console.log(pathObj);


//Operate System Module
const os = require('os');
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
//console.log(`${freeMemory} / ${totalMemory}`)


//File System Module
const fs = require('fs');
const files = fs.readdirSync('./');
//console.log(files);


//Event System Module
const EventEmitter = require('events');
const emitter  = new EventEmitter();

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (args) =>{
    console.log('Listerner called', args)
})

logger.log('message')











