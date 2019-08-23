const EventEmitter = require('events');
const util = require('util');

let db = [
    {
        name:'ashu',
        last:'mishra'
    }
];

function UserList() {

    // it'll inherit all own properties
    EventEmitter.call(this);
}

// inherits prototype properties also

util.inherits(UserList, EventEmitter);

UserList.prototype.add = function(obj) {
    console.log('Add function', obj)


    if(Object.keys(obj).length <= 0) {
        this.emit('error', new Error('User obj is empty'))
    }else{
        db.push(obj);
        this.emit('save');
    }
}

UserList.prototype.all = function() {
    return db;
}

module.exports.UserList = UserList;