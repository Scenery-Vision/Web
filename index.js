const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const session = require('cookie-session');
const homeRoutes = require('./routes/home');
const aboutRoutes = require('./routes/about');
const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    helpers: require('./config/handlebars-helpers')
});

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');
app.set('views', 'Views');

app.use(express.json({
    extended: false
}));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(session({secret: 'so-secret', resave: false, saveUninitialized: false}));
app.use(morgan('dev'))
app.use('/', homeRoutes);
app.use('/about', aboutRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('Server running at port: ' + PORT);
});