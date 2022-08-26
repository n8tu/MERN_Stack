const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const router = require("./routes/jokesRouting")
require("./configs/jokesConfigration") // Get all needed Configuration

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/",router);// Enable Routing

app.listen( 8000, () => console.log(`Listening on port: 8000`) );
