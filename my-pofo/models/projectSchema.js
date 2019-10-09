const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: (n) => Promise.resolve(n.length >= 3),
            message: 'Minimum length of Name is 3'
        }
    },
    alias: {
        type: String,
        required: true,
        unique: true
    },
    image: String,
    description: String,
    githubUrl: {
        type: String,
        trim: true
    },
    tags: [{
        name: String,
        class: String
    }],
    imageSliders: [String],
    relatedProjects: [{
        name: String,
        link: String
    }],
    createdOn: {type: Date, default: Date.now()},
    updatedOn: Date
});


// exports instance of collection
module.exports = mongoose.model('projects', projectSchema);