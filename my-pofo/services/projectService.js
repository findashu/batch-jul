const rq = require('request');


module.exports.projectList = () => {
    return new Promise((resolve,reject) => {
        let reqObj = {
            method: 'GET',
            uri: 'http://localhost:3005/projects',
        }
        
        rq(reqObj, function(err,res,body) {
            if(res.statusCode == 200) {
                
                let bd = JSON.parse(body)
                // console.log(bd.data)
                resolve(bd.data)
                
                
            }else{
                reject(err)
            }
        })
    })
}

module.exports.createProject = (data) => {

    return new Promise((resolve,reject) => {
        let reqObj = {
            method: 'POST',
            uri: 'http://localhost:3005/projects',
            body:data,
            json: true,
            headers: {
                'content-type': 'application/json'
            }
        }
        
        rq(reqObj, function(err,res,body) {
            if(res.statusCode == 201) {
                resolve(body.data)
            }else{
                reject(err)
            }
        })
    })
}

module.exports.getProject = (alias) => {
    return new Promise((resolve, reject) => {
        let reqObj = {
            method: 'GET',
            uri: `http://localhost:3005/projects/${alias}`,
            headers: {
                'content-type': 'application/json'
            }
        }
        
        rq(reqObj, function(err,res,body) {
            if(res.statusCode == 200) {
                let bd = JSON.parse(body)
                resolve(bd.data)
            }else{
                reject(err)
            }
        })
    })
}

module.exports.deleteProject = (alias) => {
    return new Promise((resolve,reject) => {

        let reqObj = {
            method: 'DELETE',
            uri: `http://localhost:3005/projects/${alias}`,
            headers: {
                'content-type': 'application/json'
            }
        }
        
        rq(reqObj, function(err,res,body) {
            if(res.statusCode == 200) {
                let bd = JSON.parse(body)
                resolve(bd.data)
            }else{
                reject(err)
            }
        })

    });
}

module.exports.update = (alias, bodyData) => {

    return new Promise((resolve,reject) => {
        let reqObj = {
            method: 'PUT',
            uri: `http://localhost:3005/projects/${alias}`,
            body: bodyData,
            json:true,
            headers: {
                'content-type': 'application/json'
            }
        }
        
        rq(reqObj, function(err,res,body) {
            if(res.statusCode == 200) {
                let bd = body
                resolve(bd.data)
            }else{
                reject(err)
            }
        })
    })
}