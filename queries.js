const db = require('./connection');

function getAllCriticalUpdates() {
    return db.select('*').from('criticalupdates')
}

// getCriticalUpdateById = id => {
//     return db('criticalupdates').where('criticalupdates.id', id)
// }


module.exports = {
    getAllCriticalUpdates
    // getCriticalUpdateById, 
};