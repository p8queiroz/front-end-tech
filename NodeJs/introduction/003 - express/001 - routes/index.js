const express = require("express");
const app = express();

app.get("/product/:category/:name", (req, res) => {
    //call send method only once
    res.send(req.params);
})

app.get("/product/:status", (req, res) => {
    res.send("product status ...");
})

app.listen(8081, (req, res) => {
    console.log(`server is running or port 8081`)
})