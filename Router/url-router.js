const router = require('express').Router()

const Table = require('../Models/url-model');


router.get('/',(req,res) => {
    Table.getURL()
    .then((tbl) => {
        res.status(200).json(tbl)
    })
})

module.exports = router;