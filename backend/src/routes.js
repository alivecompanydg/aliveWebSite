
const express = require("express")

const routes = express.Router()
const userController = require("./Controllers/userController")

routes.post("/cad", userController.store)

module.exports = routes