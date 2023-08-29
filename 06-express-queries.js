const express = require('express')
const port = 3455

const app = express()

app.get(`/api/auth`, (req,res) => {
    const data = req.query
    return res.status(200).json({ output: data})
})

app.listen(port, () => {
    console.log(`server is started @http://localhost:${port}`)
})