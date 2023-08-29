const express = require('express')
const path = require('path')

const app = express()

// config settings to make folder as static
app.use(express.static('./doc'))

app.get(`/`, (req,res) => {
    res.sendFile(path.resolve(__dirname, './doc/index.html'))
})

app.get(`/home`, (req,res) => {
    res.sendFile(path.resolve(__dirname, './doc/index.html'))
})

app.get(`/about`, (req,res) => {
    res.sendFile(path.resolve(__dirname, './doc/about.html'))
})

app.get(`/contact`, (req,res) => {
    res.sendFile(path.resolve(__dirname, './doc/contact.html'))
})

app.all(`*`, (req,res) => {
    res.status(404).sendFile(path.resolve(__dirname, './doc/pnf.html'))
})

app.listen(3504, () => {
    console.log(`server is started and running @http://localhost:3504`)
})

/* 
    app.use() -> middlewares / default route / settings
    app.set() -> config settings
    app.get() -> get request 
    app.post() -> post request
    app.all() -> default request
    app.listen() - to all
*/