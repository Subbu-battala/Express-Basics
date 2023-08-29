const express = require('express')

//ref
const app = express()

// app.request(route,controller callback)
app.get(`/`, (req,res) => {
    res.status(200).json({ msg: "You are in home route" })
})

app.post(`/api/login`, (req,res) => {
    res.status(200).json({msg: "your in login page"})
})

app.patch(`/api/user/edit/:id`, (req,res) => {
    res.status(200).json({msg: "your in edit user route"})
})

app.delete(`/api/user/delete/:id`, (req,res) => {
    res.status(200).json({msg: "your in delete user route"})
})

app.all(`/*`, (req,res) => {
    res.status(404).json({msg: "Requested Path not Found"})
})

app.listen(3503, () => {
    console.log(`server is started and running @http://localhost:3503`)
})

/* 
    app.get => to send read reuest
    app.post => to send create request
    app.patch
    app.put => to send update request
    app.delete => to send delete request
    app.all => default request
*/