exports.up = function(knex, Promise) {
  return knex.schema.alterTable("unidades", function(table) {
    table
      .float("latitude",14,10)
      .notNull()
      .alter();
    table
      .float("longitude",14,10)
      .notNull()
      .alter();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable("unidades", function(table) {
    table
      .string("latitude")
      .notNull()
      .alter();
    table
      .string("longitude")
      .notNull()
      .alter();
  });
};
