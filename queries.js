const db = require('./connection')

function get criticalUpdates () {
    return db('swaccd').select();
}


module.exports = {
    criticalUpdates,
}