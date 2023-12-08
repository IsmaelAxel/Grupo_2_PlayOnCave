require ('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override')
const indexRouter = require('./routes/index.routes');
const usersRouter = require('./routes/users.routes');
const productsRouter = require('./routes/products.routes')
const apiProductsRouter = require('./routes/v1/apiProducts.routes')
const apiUsersRouter = require('./routes/v1/apiUsers.routes')
const apiCartRouter = require('./routes/v1/apiCart.routes')
const app = express();
const session = require("express-session");
const cookieCheck = require('./middlewares/cookieCheck');
const userSessionCheck = require('./middlewares/userSessionCheck');
const cors = require("cors")

// view engine setup
app.use(cors())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(methodOverride('_method'));
app.use(session({
  secret: "PlayOnCave",
  resave: true,
  saveUninitialized: true
}))
app.use(cookieCheck)
app.use(userSessionCheck);



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/api/products', apiProductsRouter)
app.use('/api/users', apiUsersRouter)
app.use('/api/cart', apiCartRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
