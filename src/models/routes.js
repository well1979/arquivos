const express = require("express")
const routes = express.Router()
const UserController = require('../controllers/UserControllers')


routes.post('/user' , UserController.create)
routes.put('/user/:userid' , UserController.update)
routes.get('/user' , UserController.list)
routes.get('/user/:userid' , UserController.show)
routes.delete('/user/:userid' , UserController.delete)

module.exports = routes
