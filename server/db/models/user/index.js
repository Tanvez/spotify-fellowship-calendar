const Sequelize = require('sequelize')
const db = require('../../db')

const User = db.define('user', {
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  fullName: {
    type: Sequelize.VIRTUAL,
    get () {
      return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
    }
  }
})

module.exports = User