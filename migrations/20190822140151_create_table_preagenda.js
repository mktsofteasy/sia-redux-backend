exports.up = function(knex, Promise) {
  return knex.schema.createTable("preagenda", table => {
    table.increments("id").primary();
    table
      .integer("unidade_id")
      .references("id")
      .inTable("unidades");
    table
      .integer("convenio_id")
      .references("id")
      .inTable("convenios");
    table.string("diadasemana").notNull();
    table.string("periodo").notNull();
    table.string("pedido1").notNull();
    table.string("pedido2").notNull();
    table.string("pedido3").notNull();
    table.string("datapreagenda").notNull();
    table.string("status").notNull();
    table.index(["id","unidade_id","convenio_id"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("preagenda");
};
