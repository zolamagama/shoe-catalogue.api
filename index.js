const express = require('express');

const exphbs = require('express-handlebars');

const bodyParser = require('body-parser');

const flash = require('express-flash');

const session = require('express-session');

const pg = require("pg");

const Pool = pg.Pool;

const cors = require('cors');

const app = express();

const shoeCatalogue = require('./brands-api')

app.engine('handlebars', exphbs({
    layoutsDir: './views/layouts'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/shoe-catalogue.api';

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(session({
    secret: "shoes matter",
    resave: false,
    saveUninitialized: true
}));

app.use(cors());

app.use(flash());

const pool = new Pool({
    connectionString,
});

const shoesAPI = shoeCatalogue()


// app.get('/', async function (req, res) {

// });

app.get('/api/shoes', shoesAPI.createShoes);

app.get('api/color', shoesAPI.colors);

app.get('api/brand', shoesAPI.brands);

app.get('api/size', shoesAPI.sizes)

app.get('/api/shoes/brand/:brandname', shoesAPI.shoesOfbrand);

app.get('/api/shoes/size/:size', shoesAPI.sizeOfBrand);

app.get('/api/shoes/brand/:brandname/size/:size', shoesAPI.shoesOfSizeAndBrand);

app.post('/api/shoes/sold/:id', async function (req, res) {

});

app.post('/api/shoes', async function (req, res) {

});







const PORT = process.env.PORT || 7214

app.listen(PORT, function () {

    console.log("App started at port:", PORT)

});