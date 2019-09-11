exports.up = function(knex, Promise) {
    return knex.schema.table('laboratorios', function(t) {
        t.string('cor').notNull().defaultTo("#009540");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('laboratorios', function(t) {
        t.dropColumn('cor');
    });
};