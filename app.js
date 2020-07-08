const express = require('express');
const logger = require('morgan');
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, "public")));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//middleware
app.use((req, res, next) => {
    console.log("cookies: ", req.cookies);
    const username = req.cookies.username;

  res.locals.signInUser = username || "";

  console.log("res.locals: ", res.locals);

  next();
});

const signPage = require("./routes/index");
const newCluck = require("./routes/clucks", )

app.use("/", signPage);
// app.use('/newClk', newCluck);


const PORT = 3000;
const DOMAIN = 'localhost';

app.listen(PORT, DOMAIN, () => {
    console.log(`Express listening on ${DOMAIN}:${PORT}`);
  });