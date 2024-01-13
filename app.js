/**
 * @license Apache-2.0
 * *@copyright 2024 tonyherve
  */

'use strict';

/**
 * node modules
 */

const express = require('express');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();
const PORT = 3000;

/**
 * custom modules
 */
const home = require('./src/routes/home.route');
const checkout = require('./src/routes/checkout.route');

/**
 * initial express app
 */

const  app = express();

/**
 * setting ejs view engine
 */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
/**
 * setting public folder
 */
app.use(express.static(`${__dirname}/public`));

/**
 * setting HTTP response headers
 */
app.use(helmet());

/**
 *  parse request body
 */

app.use(express.urlencoded({ extended: true }));

/**
 * home page
 */
app.use('/', home);

/**
 *  checkout
 */

app.use('/checkout', checkout);

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});