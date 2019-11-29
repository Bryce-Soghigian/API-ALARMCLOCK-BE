// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgres',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations'
    },
   
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './db/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations',
    }
  
  }

};