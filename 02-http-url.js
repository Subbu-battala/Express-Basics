const http = require('http')

const server = http.createServer((req,res) => {
    const url = req.url

    if(url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.write(`<div>
                        <nav>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/users">Users</a>
                            <a href="/login">Login</a>
                        </nav>
                        <div>
                            <h1>Home Page</h1>
                        </div>
                 </div>`)
                 res.end()
    } else if (url === `/about`) {
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.write(`<div>
                        <nav>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/users">Users</a>
                            <a href="/login">Login</a>

                        </nav>
                        <div>
                            <h1>About Page</h1>
                        </div>
                 </div>`)
                 res.end()
    } else if (url === `/users`) {
        res.writeHead(200, { 'Content-Type': 'text/html'})
        res.write(`<div>
                        <nav>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/users">Users</a>
                            <a href="/login">Login</a>

                        </nav>
                        <div>
                            <h1>Users Page</h1>
                        </div>
                 </div>`)
                 res.end()
    } else {
         res.writeHead(404, { 'Content-Type': 'text/html'})
        res.write(`<div>
                        <nav>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/login">Login</a>
                            <a href="/users">Users</a>
                        </nav>
                        <div>
                            <h1>Requested Path not Found</h1>
                        </div>
                 </div>`)
                 res.end()
    }
})

server.listen(3040, () => {
    console.log(`server is started @http://localhost:3040`)
})