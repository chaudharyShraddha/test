const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const mongoDB = require('./config/database');
const app = express();

// Init Middleware
app.use(
  express.json({
    extended: false,
  })
);
app.use('/uploads', express.static('uploads'));

// connect to database
mongoDB();

// store cart into session
app.use(
  session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { maxAge: 180 * 60 * 1000 },
  })
);
app.use(function (req, res, next) {
  res.locals.session = req.session;
  next();
});

// define route
app.use('/api', require('./routes/routes'));

app.listen(5000, () => console.log('Server is running'));
