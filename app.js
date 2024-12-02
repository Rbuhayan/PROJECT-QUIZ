var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');



var indexsRouter = require('./routes/indexs');
var fetchQuestionsRouter = require('./routes/fetch_questions');
var app = express();
var indexRouter = require('./routes/index');
var aboutusRouter = require('./routes/aboutus');
var contactusRouter = require('./routes/contactus');
var usersRouter = require('./routes/users');
var viewsRouter = require('./routes/views' );

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://rbuhayan003:12345@cluster0.xxqs5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
}).then(
  () => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error', err));

app.use('/indexs', indexsRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fetch_questions',fetchQuestionsRouter);
app.use('/aboutus',aboutusRouter);
app.use('/contactus', contactusRouter);
app.use('/views', viewsRouter);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
