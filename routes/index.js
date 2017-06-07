const express       = require('express');
const routes        = express();

//user routes
const usersRoute    = require('./users');
routes.use('/users', usersRoute);

//eventCategories or interests routes
const interestsRoute    = require('./interests');
routes.use('/interests', interestsRoute);

module.exports = routes;
