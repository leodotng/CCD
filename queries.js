const db = require('./connection');

function getAllCriticalUpdates() {
    return db.select('*').from('criticalupdates')
}

function addCriticalUpdates(data) {
    return db('criticalupdates').insert(data);
}

function addShiftPassDown(shift) {
    return db('shiftpassdown').insert(shift);
}
function getAllShiftPassDown() {
    return db('shiftpassdown').select()
}

function getShiftPassDown(id) {
    return db('shiftpassdown').select('*').where('id', id)
}

// function getSingleShiftPassDown(id) {
//     return db('shiftpassdown').select('*').where('id', id)
// }


module.exports = {
    getAllCriticalUpdates,    
    addCriticalUpdates,
    getAllShiftPassDown,
    addShiftPassDown,
    getShiftPassDown,
    // getSingleShiftPassDown,
};