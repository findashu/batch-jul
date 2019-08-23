const events = require('events');

let emitter = new events.EventEmitter();

// default max listener is 10;
emitter.setMaxListeners(15);

emitter.on('knock', function() {
    console.log(`Who's there!`)
});


emitter.on('knock', function() {
    console.log('How are you?')
});

// emitter.on('knock', () => console.log('3'));
// emitter.on('knock', () => console.log('4'));
// emitter.on('knock', () => console.log('5'));
// emitter.on('knock', () => console.log('6'));
// emitter.on('knock', () => console.log('7'));
// emitter.on('knock', () => console.log('8'));
// emitter.on('knock', () => console.log('9'));
// emitter.on('knock', () => console.log('10'));
// emitter.on('knock', () => console.log('11'));


emitter.emit('knock');

// emitter.emit('knock');


emitter.once('click', function() {
    console.log('Got clicked');
});


emitter.emit('click');
emitter.emit('click');

// sendEmail

function mailSent() {
    console.log('SEnd Email');
}

emitter.on('sendEmail', mailSent);

emitter.on('sendEmail', function(name) {
    console.log(`Email sent to ${name} successfully`)
});

emitter.emit('sendEmail', 'ashu');

emitter.removeListener('sendEmail', mailSent);

emitter.emit('sendEmail', 'ashu');
