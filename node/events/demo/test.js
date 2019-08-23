const userList = require('./user-module');
let user = new userList.UserList();



user.on('save', function() {
    console.log('user saved successfully')
});


user.on('error', function(err) {
    console.log('Error', err);
})


user.add({'name':"js"});

user.add({});

console.log(user.all())

