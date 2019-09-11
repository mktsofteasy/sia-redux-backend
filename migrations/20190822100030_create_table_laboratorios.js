exports.up = function(knex, Promise) {
  return knex.schema.createTable("laboratorios", table => {
    table.increments("id").primary();
    table.string("nome").notNull();
    table.string("logotipo").notNull();
    table.index(["id"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("laboratorios");
};
