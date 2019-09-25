exports.up = function(knex, Promise) {
    return knex.schema.table('users', function(t) {
        t.string('sexo');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('users', function(t) {
        t.dropColumn('sexo');
    });
};