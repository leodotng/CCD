const db = require('./connection');

// function getAllCriticalUpdates() {
//     return db('criticalupdates').select()
// }
// function addCriticalUpdates(data) {
//     return db('criticalupdates').insert(data);
// }

let getAllShiftPassDown = () => {
    return db('shiftpassdown').select()
}

let addShiftPassDown = (shiftpassdown) => {
    return db('shiftpassdown').insert(shiftpassdown).returning('id')
}



// function addShiftPassDown(shift) {
//     return db('shiftpassdown').insert(shift);
// }
// function getAllShiftPassDown() {
//     return db('shiftpassdown').select()
// }
// function getShiftPassDown(id) {
//     return db('shiftpassdown').select('*').where('id', id)
// }

// function getSingleShiftPassDown(id) {
//     return db('shiftpassdown').select('*').where('id', id)
// }

module.exports = {
    // getAllCriticalUpdates,    
    // addCriticalUpdates,
    getAllShiftPassDown,
    addShiftPassDown
    // getShiftPassDown,
    // getSingleShiftPassDown,
};