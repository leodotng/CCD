
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('criticalupdates', function(table){
        table.increments()
        table.text('critdetails')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        }),
    ])
  };
  
  exports.down = function(knex, Promise) {
    return Promise.all([
    knex.schema.dropTable('criticalupdates')
    ])
  };
  