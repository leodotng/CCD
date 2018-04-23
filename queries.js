const db = require('./connection');

function getCriticalUpdates(){
    return db('criticalupdates').orderBy('details');
}

module.exports = {
   getCriticalUpdates,  
};