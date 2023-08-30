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
app.post(`/api/user/new`, (req,res) => {
    let data = req.body

      // validate existing email
      let extEmail = users.find((item) => item.email === data.email)
        if(extEmail)
          return res.status(401).json({ msg: `User email ${data.email} already exists.` })
    let newUsers = [...users, data]
    res.status(200).json({ msg: ' new user added successfully', newUsers })
})

// update user -> patch -> data & id
app.patch(`/api/user/edit/:id`, (req,res) => {
  let id = req.params.id
  const data = req.body

  let extuser = users .find((item) => item.id == id)
  if(!extuser)
     return res.status(404).json({ msg: `user id not existing` })

     const updateUser = users.map((item) => {
          if(item.id == id) {
             item.name = data.name
             item.email = data.email
          }
          return item
     })

     res.status(200).json({ msg: 'user updated successfully', updateUser })


})

// delete user -> delete -> id
app.delete(`/api/user/delete/:id`, (req,res) => {
    let id = req.params.id

    let extUser = users.find((item) => item.id == id)
    if(!extUser)
        return res.status(404).json({ msg: `User ${id} id does'nt exists` })
    
    const dUser = users.filter((item)=> item.id != id)

    res.status(200).json({ msg: 'User deleted success', dUser })

})

// default route
app.all(`*`, (req,res) => {
    res.status(404).json({ msg: `Requested path not found` })
})

// server call
app.listen(port, () => {
    console.log(`server is started @http://localhost:${port}`)
})