const Data = require('../models')

const getAll =  async (req, res)=>{
    const data = await Data.findAll()
    try{
        res.writeHead(200, {'content-type' : 'application/json'})
        res.end(JSON.stringify(data))
    }catch(error){
        console.log(error.message)
    }
}
module.exports={
    getAll,
}