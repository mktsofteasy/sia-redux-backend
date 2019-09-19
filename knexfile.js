// Update with your config settings.

module.exports = {
  client: "postgresql",
  connection: {
    host: "186.233.90.86",
    database: "siaredux",
    user: "postgres",
    password: "961735A#"
  },
  //connection: {
  //  database: "siaredux",
  //  user: "postgres",
  //  password: "postgres"
  //},
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: "knex_migrations"
  }
};