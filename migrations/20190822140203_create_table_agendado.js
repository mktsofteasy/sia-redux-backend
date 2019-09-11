exports.up = function(knex, Promise) {
  return knex.schema.createTable("agendado", table => {
    table.increments("id").primary();
    table
      .integer("unidade_id")
      .references("id")
      .inTable("unidades")
      .notNull();
    table.string("atendimento").notNull();
    table.datetime("datacoleta").notNull();
    table.index(["id","unidade_id","atendimento"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("agendado");
};
