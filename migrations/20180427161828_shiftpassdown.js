
exports.up = function(knex, Promise) {
    return Promise.all ([ knex.schema.createTable('shiftpassdown', function (table){
      table.increments('id')
      table.varchar('details')
    })
  
    ])
  };
  
  exports.down = function(knex, Promise) {
    return Promise.all ([
        knex.schema.dropTable('shiftpassdown')
    ])
  };
  