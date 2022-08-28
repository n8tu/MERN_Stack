const bodyParser = require('body-parser')
const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;
const router = require("./server/routes/ProductRoutes")
require("./server/configs/ProjectManagerConfiguration")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use("/",router); // Enable Routing

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})
