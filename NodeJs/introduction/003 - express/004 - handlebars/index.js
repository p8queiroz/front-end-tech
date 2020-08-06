const express = require("express");
const app = express();
const path = __dirname;
const handlebars = require("express-handlebars");
const bodyparser = require("body-parser");


//config
//template handlebar
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//body parser 
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())



app.get("/", (req, res) => {

    res.render('form');
})

app.get("/about", (req, res) => {
    res.sendFile(`${path}/files/about.html`);
})

app.post("/addpost", (req, res) => {
    res.send(`form recieved ${req.body.content} - ${req.body.title}`);
})



app.listen(8081, (req, res) => {
    console.log(`server is running or port 8081: ${path}`)
})