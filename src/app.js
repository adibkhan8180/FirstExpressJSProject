const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../src/views");
const partials_path = path.join(__dirname, "../src/views/partials");


app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));


app.get("", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

app.get("*", (req, res) => {
    res.render('404error', {
        errormsg: "oops page not found!!!!!"
    });
});

app.listen(port, ()=>{
    console.log(`listening to the port at ${port}`);
});