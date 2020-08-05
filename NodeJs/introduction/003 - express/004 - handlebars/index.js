const express = require("express");
const app = express();
const path = __dirname;
const handlebars = require("express-handlebars");


//config
//template hand
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get("/", (req, res) => {
    res.render('form');
})

app.get("/about", (req, res) => {
    res.sendFile(`${path}/files/about.html`);
})

app.listen(8081, (req, res) => {
    console.log(`server is running or port 8081: ${path}`)
})