const bodyParser = require('body-parser')
const express = require("express");
const cors = require("cors")
const app = express();
const port = 8000;
const router = require("./server/routes/AuthorRouter")
require("./server/configs/AuthorConfigurations")

app.use(cors()) // Enable cross site - Server and React
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/",router); // Enable Routing

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})
