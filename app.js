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
require('dotenv').config();
const PORT = 3000;

/**
 * custom modules
 */
const home = require('./src/routes/home.route');

/**
 * initial express app
 */

const  app = express();

/**
 * setting ejs view engine
 */
app.set('view engine', 'ejs');

/**
 * setting public folder
 */
app.use(express.static(`${__dirname}/public`));

/**
 * setting HTTP response headers
 */
app.use(helmet());

/**
 * home page
 */
app.use('/', home);

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});