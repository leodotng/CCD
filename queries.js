const db = require('./connection');

getAllCriticalUpdates = () => {
    return db('criticalupdates')
}

getCriticalUpdateById = id => {
    return db('criticalupdates').where('id', id)
}


module.exports = {
    getAllCriticalUpdates,
    getCriticalUpdateById, 
};