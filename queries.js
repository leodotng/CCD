const db = require('./connection');

function getCriticalUpdates() {
    return db('criticalupdates').orderBy('details');
}

function addCriticalUpdates(data) {
    return db('criticalupdates').insert(data);
}

module.exports = {
    getCriticalUpdates,
    addCriticalUpdates,
    // getOneCriticalUpdate,
    // deleteCriticalUpdate
};