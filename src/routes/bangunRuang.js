const express = require('express')
const app = express.Router();

app.use(express.json())

const controller = require(`../Controller/controllerBangunRuang`)

app.post("/kubus", controller.kubus)
app.post("/balok", controller.balok)
app.post("/bola", controller.bola)
app.post("/tabung", controller.tabung)

module.exports = app