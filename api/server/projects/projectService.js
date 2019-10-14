const Project = require('./projectSchema');

module.exports.listProjects = () => {
    return new Promise((resolve,reject) => {
        Project.find().then(dt => {
            resolve(dt)
        }).catch(err => reject(err))
    })
}

module.exports.createProject = (bodyData) => {
    return new Promise((resolve,reject) => {
        let newProject = new Project(bodyData);
        newProject.save().then(dt => {
            resolve(dt)
        }).catch(err => reject(err))
    })
}

module.exports.getProjectByAlias = (alias) => {
    return new Promise((resolve,reject) => {
        Project.findOne({alias:alias}).then(dt => {
            resolve(dt)
        }).catch(err => reject(err))
    })
}

module.exports.deleteProject = (alias) => {
    return new Promise((resolve,reject) => {
        Project.findOneAndDelete({alias:alias}).then(dt => {
            resolve(dt)
        }).catch(err => reject(err));
    })
}

module.exports.updateProject = (alias,data) => {
    return new Promise((resolve,reject) => {
        Project.findOneAndUpdate({alias:alias}, {$set: data, $inc:{__v:1}},{new:true}).then(dt => {
            resolve(dt)
        }).catch(err => reject(err))
    })
}