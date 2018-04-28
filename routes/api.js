const express = require('express')
const queries = require('../queries')

const router = express.Router()

router.get('/criticalupdates', (req,res)=>{
    queries.getCriticalUpdates()
    .then(data=>{
        res.json(data)
    })
})