const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>{
    res.json({mssg:"GET all the watchlist"})
})

router.get('/:id',(req,res)=>{
    res.json({mssg:'get all movies in a watchlist'})
})

router.post('/',(req,res)=>{
    res.json({mssg:'POST new watchlist'})
})

module.exports = router