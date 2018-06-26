const Sequelize = require('sequelize')
const db = require('../../db')

const Event = db.define ('event', {
  description: {
    type: Sequelize.TEXT
  },
  start:{
    type: Sequelize.DATE
  },
  end:{
    type: Sequelize.DATE
  }
})

module.exports = Event