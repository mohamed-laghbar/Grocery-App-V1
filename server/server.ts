const express = require("express");
const app = express();
const cors = require("cors");
// require("./src/config/db");
require("dotenv").config();
// const cookieParser = require("cookie-parser");
const DB = require('./src/config/db')
// app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());



const port: String | Number = process.env.PORT || 5000;

app.listen(port, (): void => {
    console.log(`running on port ${port}`);
});
