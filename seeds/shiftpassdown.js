
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shiftpassdown').del()
    .then(function () {
      // Inserts seed entries
      return knex('shiftpassdown').insert([
        {details: 'Gate 35 is out of service for the rest of the evening.'},
        
      ]);
    });
};
