const router = require('express').Router()
const {Event} = require('../../db')

router.get('/', (req,res,next)=>{
  Event.findAll()
  .then(events=>res.status(200).send(events))
  .catch(next)
})

router.post('/', (req,res,next) => {
  const { description, start,end, userId} = req.body
  Event.create({
    description,
    start,
    end,
    userId
  })
  .then((newEvent)=>res.status(201).send(newEvent))
  .catch(next)
})

module.exports = router