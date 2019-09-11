exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table.string("nomecompleto").notNull();
    table
      .string("cpf")
      .notNull()
      .unique();
    table.string("password").notNull();
    table.string("datanascimento");
    table.string("email");
    table.string("celular");
    table.string("cep");
    table.string("logradouro");
    table.string("numero");
    table.string("complemento");
    table.string("bairro");
    table.string("cidade");
    table.string("uf");
    table.text("docfrente");
    table.text("docverso");
    table.text("cartfrente");
    table.text("cartverso");
    table.boolean("visita");
    table.index(["id","cpf","password"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
