// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'grea-quiz-1',
    },
    migrations: {
      directory: './db/migrations',
    },
  },
}
