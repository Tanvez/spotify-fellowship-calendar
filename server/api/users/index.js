const router = require('express').Router()
const {User} = require('../../db')

router.get('/', (req,res,next)=>{
  User.findAll()
  .then(oneUser=>res.send(oneUser))
  .catch(next)
})
module.exports = router