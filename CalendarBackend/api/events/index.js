const router = require('express').Router()
const {Event} = require('../../db')

//Get all Events
router.get('/', (req,res,next)=>{
  Event.findAll()
  .then(events=>res.status(200).send(events))
  .catch(next)
})
//Creates an Event
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

//Update an Event
router.put('/', (req,res,next) => {
  const { id, description, start,end} = req.body
  Event.update({
    description,
    start,
    end,
  },    
  {
    where:{id},
    returning: true
  })
  .then((updatedEvent)=>res.status(200).send(updatedEvent[1][0]))
  .catch(next)
})

//Delete an Event
router.delete('/:id', (req,res,next) => {
  const { id } = req.params
  Event.destroy({ where:{id} })
  .then(()=>res.sendStatus(204))
  .catch(next)
})

module.exports = router