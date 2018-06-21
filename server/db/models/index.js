const Event = require ('./event')
const User = require ('./user')

//PUT RELATIONSHIPS HERE
User.hasMany(Event)

module.exports = {
  Event,
  User
}
