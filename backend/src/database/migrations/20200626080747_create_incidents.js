// Relacionamento 1-n tem que pegar a chave de 1 e passar como chave estrangeira para N
exports.up = function(knex) {
    return knex.schema
        .createTable('incidents', function (table) {
            table.increments();
            table.string('title').notNullable();
            table.string('description').notNullable();
            table.decimal('value').notNullable();

            // Chave estrangeira de ONG's
            table.string('id_ong').notNullable()
            table.foreign('id_ong').references('id').inTable('ongs')

        })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
};
