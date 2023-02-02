const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors")
const port = 8002;
require("./db/conn");
const router = require("./Routes/router");



//middleware

app.use(express.json())
app.use(cors());
app.use(router);

app.listen(port, ()=>{
    console.log(("server start at " + port))
});