exports.up = function(knex, Promise) {
  return knex.schema.table("agendado", table => {
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .notNull();
  });
};

exports.down = function(knex, Promise) {
  table.dropColumn("user_id");
};
