exports.up = function(knex, Promise) {
    return knex.schema.table('preagenda', function(t) {
        t.string('user_id').notNull();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('preagenda', function(t) {
        t.dropColumn('user_id');
    });
};