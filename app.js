const express = require('express');
const logger = require('morgan');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(logger('dev'));

app.get("/hello_world", (request, response) => {
    response.render('hello_world');
});