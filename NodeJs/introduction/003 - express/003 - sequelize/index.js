const express = require("express");
const app = express();
const path = __dirname;

app.get("/", (req, res) => {
    res.sendFile(`${path}/files/index.html`);
})

app.get("/about", (req, res) => {
    res.sendFile(`${path}/files/about.html`);
})

app.listen(8081, (req, res) => {
    console.log(`server is running or port 8081: ${path}`)
})