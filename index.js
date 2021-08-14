var express = require('express')
var port = process.env.PORT || 3000;
var cors = require('cors');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();
var router = require('./router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));

app.use(cookieParser());
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false 
}));

app.use("/phonebook", router);  // path localhost:3000/phonebook
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})

