import knex from 'knex'
import knexfile from '../knexfile.js'

const environment = process.env.DB_ENV || "development"

export default knex(knexfile[environment])
