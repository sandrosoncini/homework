// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "cohort"
    }
  },
  migrations: {
    directory: './db/migrations'
  }

 
};
