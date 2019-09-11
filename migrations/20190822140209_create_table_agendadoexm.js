exports.up = function(knex, Promise) {
  return knex.schema.createTable("agendadoexm", table => {
    table.increments("id").primary();
    table
      .integer("agendado_id")
      .references("id")
      .inTable("agendado")
      .notNull();
    table.string("nomeexm").notNull();
    table.string("preparoexm").notNull();
    table.index(["id","agendado_id"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("agendadoexm");
};
