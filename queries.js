const db = require('./connection');

function getCriticalUpdates() {
    return db.select('*').from('criticalupdates')
}

function addCriticalUpdates(data) {
    return db('criticalupdates').insert(data);
}

function addShiftPassdown(shift) {
    return db('shiftpassdown').insert(shift);
}

module.exports = {
    getCriticalUpdates,
    addCriticalUpdates,
    addShiftPassdown
    // getOneCriticalUpdate,
    // deleteCriticalUpdate
};