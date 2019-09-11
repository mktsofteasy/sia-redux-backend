exports.up = function(knex, Promise) {
  return knex.schema.table("preagenda", function(t) {
    t.text("pedido1").alter();
    t.text("pedido2").alter();
    t.text("pedido3").alter();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("preagenda", function(t) {
    t.string("pedido1").alter();
    t.string("pedido2").alter();
    t.string("pedido3").alter();
  });
};
