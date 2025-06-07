const express = require('express');

const v1Router = express.Router()
const problemRoutes = require('./problem-routes')


v1Router.use('/problem',problemRoutes)

module.exports = v1Router;