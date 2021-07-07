//load configuration of knex
const config = require("../knexfile")
//load kenex module
const knex = require('knex')

module.exports= knex(config.development)