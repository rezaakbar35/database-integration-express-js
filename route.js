const express = require('express')
const router = express.Router()
const pool = require('./query.js')

router.get('/:show', function(req, res){
    const sqlQueryOneTable = `
    SELECT * FROM ${req.params.show}
    `;
    pool.query(sqlQueryOneTable, (err, result) => {
        if (err) {
        throw err;
        }
        res.send(result);
    });
})

router.get('/:show/:basedOn/:value', function(req, res){
    const sqlQueryBasedOnValue = `
    SELECT * FROM ${req.params.show} WHERE ${req.params.basedOn}=${req.params.value}
    `;
    pool.query(sqlQueryBasedOnValue, (err, result) => {
        if (err) {
        throw err;
        }
        res.send(result);
    });
})

router.get('/:show/:firstTableToJoin/:foreignKeyFirstTable/:secondTableToJoin/:foreignKeySecondTable/:basedOn/:value', function(req, res){
    const sqlQueryJoinTwoTable = `
    SELECT ${req.params.show}. * FROM ${req.params.show}
    JOIN ${req.params.firstTableToJoin} ON ${req.params.show}.${req.params.foreignKeyFirstTable} = ${req.params.firstTableToJoin}.${req.params.foreignKeyFirstTable}
    JOIN ${req.params.secondTableToJoin} ON ${req.params.firstTableToJoin}.${req.params.foreignKeySecondTable} = ${req.params.secondTableToJoin}.${req.params.foreignKeySecondTable}
    WHERE ${req.params.secondTableToJoin}.${req.params.basedOn} = '${req.params.value}';
    `;
    pool.query(sqlQueryJoinTwoTable, (err, result) => {
        if (err) {
        throw err;
        }
        res.send(result);
    });
})

module.exports = router;