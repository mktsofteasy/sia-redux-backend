exports.up = function(knex, Promise) {
  return knex.schema.table("users", function(t) {
    t.text("docfrente").alter();
    t.text("docverso").alter();
    t.text("cartfrente").alter();
    t.text("cartverso").alter();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("users", function(t) {
    t.string("docfrente").alter();
    t.string("docverso").alter();
    t.string("cartfrente").alter();
    t.string("cartverso").alter();
  });
};
