exports.up = function(knex, Promise) {
  return knex.schema.createTable("unidades", table => {
    table.increments("id").primary();
    table
      .integer("laboratorio_id")
      .references("id")
      .inTable("laboratorios");
    table.string("nome").notNull();
    table.string("telefone").notNull();
    table.string("cep").notNull();
    table.string("logradouro").notNull();
    table.string("numero").notNull();
    table.string("complemento");
    table.string("bairro").notNull();
    table.string("cidade").notNull();
    table.string("uf").notNull();
    table.string("latitude").notNull();
    table.string("longitude").notNull();
    table.string("horario").notNull();
    table.string("estacionamento");
    table.index(["id","laboratorio_id"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("unidades");
};
