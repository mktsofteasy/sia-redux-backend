exports.up = function(knex, Promise) {
    return knex.schema.createTable("convenios", table => {
      table.increments("id").primary();
      table.string("codigoans").notNull().unique();
      table.string("razaosocial").notNull();
      table.string("fantasia").notNull();
      table.index(["id"]);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("convenios");
  };
  