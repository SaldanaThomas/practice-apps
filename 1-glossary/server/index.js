const {PORT, DB_NAME} = require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require('./routes.js');

const app = express();
app.use(express.json());
app.use('/glossary', router);
app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);