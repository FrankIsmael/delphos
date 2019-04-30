const mongoose = require('mongoose')
const User = require('../models/User')

const users = {
  name: 'IFM',
  email: 'ifm@ifm.com',
  role: 'ADMIN'
}

mongoose.connect('mongodb://localhost/delphosmx')
.then(() => User.register(users, 'admin'))
.catch(err => console.log(err))
