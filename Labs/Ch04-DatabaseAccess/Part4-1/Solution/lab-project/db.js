
const knex = require("knex");

const knexconfig = require('./knexfile.js'); 
var env         = 'development';  

const db         = require('knex')(knexconfig[env]);


module.exports = db;