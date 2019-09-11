exports.up = function(knex, Promise) {
  return knex.schema.createTable("unidadesconv", table => {
    table.increments("id").primary();
    table
      .integer("unidade_id")
      .references("id")
      .inTable("unidades");
    table
      .integer("convenio_id")
      .references("id")
      .inTable("convenios");
      table.index(["id","unidade_id","convenio_id"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("unidadesconv");
};
