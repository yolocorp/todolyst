//Sessions
var parseUrl = require('parseurl'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    cors = require('cors');


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))
app.use(function (req, res, next) {
    if(!req.session.todos) {
        req.session.todos = [];
    }
    next();
})/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})*/

var corsOptions = {
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
var routes = require('./api/routes/todoListRoutes')(app);

app.listen(port);


console.log('Todo list REST API started on : ' + port);