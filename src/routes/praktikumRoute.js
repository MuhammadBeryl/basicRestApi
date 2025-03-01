const express = require('express');
const app = express.Router();

app.use(express.json());

// Mengimpor controller praktikumctr dari path relatif yang benar
const praktikumctr = require('../controller/praktikumctr');

// Menyediakan endpoint sesuai dengan permintaan
app.get("/profil/:name/:age/:kelas", praktikumctr.profil);
app.get("/identitas/:name/:kelas", praktikumctr.identitas);
app.post("/bujurSangkar", praktikumctr.bujurSangkar);
module.exports = app;