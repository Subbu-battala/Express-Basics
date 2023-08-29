const express = require('express')
const logger = require('./middleware/time')
const port = 3577

const app = express()

app.get(`/api/time`, logger, (req,res) => {
    return res.status(200).json({ final: req.timeLog })
})

app.listen(port, () => {
    console.log(`server is started @http://localhost:${port}`)
})