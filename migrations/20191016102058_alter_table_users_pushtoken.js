exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(t) {
      t.text('pushtoken');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(t) {
      t.dropColumn('pushtoken');
  });
};