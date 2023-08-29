/* body parset middleware -> req.body => we can receive form data */
const express = require('express')
const port = 4567

const app = express()

// settings of body parser
app.use(express.urlencoded({ extended: true })) // to receive form data from front end

app.use(express.json()) // outgoing json response

app.post(`/api/auth/login`, (req,res) => {
    const data = req.body  /* receives incoming data from front end */
    return res.status(200).json({ login: data })
})

app.listen(port, () => {
    console.log(`server is started @http://localhost:${port}`)
})
