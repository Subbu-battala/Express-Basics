
const http = require('http')
const port = 5000

// createServer(callback handler)
// callback handler = controller
// req => incoming data
// res => outgoing data

const server = http.createServer((req,res) => {
    
    // req.method => method type (get,post,put,patch,delete)
    // req.url => API url path 

    const data = `method =${req.method} and url = ${req.url}`;
    console.log(data)
})

server.listen(port, () => {
    console.log(`server is started and running @ http://localhost:${port}`)
})