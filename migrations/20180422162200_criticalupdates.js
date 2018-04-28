
exports.up = function(knex, Promise) {
  return Promise.all ([ knex.schema.createTable('criticalupdates', function (table){
    table.increments('id');
    table.text('details');
  })

  ])
};

exports.down = function(knex, Promise) {
  return Promise.all ([
      knex.schema.dropTable('criticalupdates')
  ])
};
