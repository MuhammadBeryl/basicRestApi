const express = require('express')
const app = express.Router();

app.use(express.json())

const controller = require(`../Controller/controllerBilangan`)

app.post("/decimal", controller.decimal)
app.post("/biner", controller.biner)
app.post("/octal", controller.octal)
app.post("/hexadecimal", controller.hexadecimal)

module.exports = app