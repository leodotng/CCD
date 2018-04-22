const db = require('./connection')

function getCriticalUpdates () {
    return db('swaccd').select();
}


module.exports = {
    getCriticalUpdates,
}