const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const connectDB = require('./config/db');

// Load config
dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();
// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// Handel Bars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
