const express = require('express')
const port = 4600

let { users } = require('./doc/data')

const app = express()

// static
app.use(express.static('./doc'))

// body parser
app.use(express.urlencoded({ extended: true })) /* encode and form data */
app.use(express.json()) /* parse json */

// to read all users - get
app.get(`/api/users`, (req,res) => {
    res.status(200).json({ length: users.length, users })
})

// read single user - get(id)
app.get(`/api/users/:id`, (req,res) => {
    let id = req.params.id
    let user = users.find((item) => item.id == id)
      if(!user)
        return res.status(401).json({ msg: `Requested user not found` })
     res.status(200).json({ user })
})

// create user - post ->data