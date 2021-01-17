const EventEmitter = require('events');
const url = 'http://teste.io/log';

class Logger extends EventEmitter {

    log(message) {
        //send an http request
        console.log(message);

        //raise an event
        this.emit('messageLogged', {
            id: 1, 
            url: 'http://teste.com'
        })
    }
}

module.exports = Logger;