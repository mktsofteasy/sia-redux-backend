exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(t) {
        t.integer('convenio_id').notNull().defaultTo(2);
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(t) {
        t.dropColumn('convenio_id');
    });
};