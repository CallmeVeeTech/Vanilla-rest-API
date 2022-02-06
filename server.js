const http = require('http')
const {getAll} = require('./modules/contoller/datacontroller')
const port = 5000

const server = http.createServer((req, res)=>{
    if (req.url ==='/api/data' && req.method === 'GET') {
        getAll(req, res)
    }else{
        res.writeHead(404, {'content-type' : 'application/json'})
        res.end(JSON.stringify({"message": "Route not found"}))
    }
 
})

server.listen(port, ()=>{
    console.log("server is running on port" + port )
})
