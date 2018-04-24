const db = require('./connection');

function getAllCriticalUpdates() {
    return db.select('*').from('criticalupdates')
}

function addCriticalUpdates(newDetails) {
    return db('criticalupdates').insert(newDetails).returning(['details'])
}


// getCriticalUpdateById = id => {
//     return db('criticalupdates').where('criticalupdates.id', id)
// }


module.exports = {
    getAllCriticalUpdates,
    addCriticalUpdates
    // getCriticalUpdateById, 
};