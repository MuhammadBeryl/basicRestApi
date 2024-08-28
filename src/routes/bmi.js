const express = require('express')
const app = express.Router();

app.use(express.json())

const controler = require(`../Controller/bmiController`)

app.post("/", controler.bmi)

module.exports = app