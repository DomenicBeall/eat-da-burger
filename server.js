const e = require('express');
const express = require('express')
const exphbs = require('express-handlebars');
const burger = require('./models/burger.js');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    var eatenBurgers = [];
    var uneatenBurgers = [];

    burger.getAll((results) => {
        results.forEach(element => {
            if (element.devoured === 0)
                uneatenBurgers.push(element);
            else
                eatenBurgers.push(element);
        });

        res.render("index", { eatenBurgers, uneatenBurgers });
    });    
});

app.post('/api/eat/:id', (req, res) => {
    burger.eatBurger(req.params.id, (response) => {
        console.log("Burger with id: " + req.params.id + " eaten succesfully.");
        res.send("Successfully deleted burger");
    });
});

app.post('/api/add', (req, res) => {
    burger.addBurger(req.body.name, (response) => {
        console.log("Burger with id: " + req.params.id + " eaten succesfully.");
        res.send("Successfully added burger");
    });
});

app.listen(port, () => {
  console.log(`Server is listening at ${port}`)
});