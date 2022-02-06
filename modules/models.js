const data = require('../data/student.json')

const findAll =()=>{
    return new Promise((resolve, reject)=>{
        resolve(data)
    })
}

module.exports={
    findAll,
}