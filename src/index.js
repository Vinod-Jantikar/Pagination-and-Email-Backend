const express = require('express')
const app = express()
const productController = require("./controllers/product.controller")
const userController = require('./controllers/user.controller')

app.use(express.json())

app.use('/products', productController)
app.use('/users', userController)

module.exports = app