const router = require('express').Router()
const {Event} = require('../../db')

router.get('/', (req,res,next)=>{
  Event.findAll()
  .then(events=>res.send(events))
  .catch(next)
})

module.exports = router