//const chance = require('chance')
const chalk = require ('chalk')
const Promise = require('bluebird')

const {
  db, 
  User,
  Event
} = require ('../server/db')

const admins = [
 { 
   id:1,
   firstName: 'Vesna',
    lastName: 'Tan',
    isAdmin: true,
    email: 'admin1@spotify-calendar.com',
    password: '123'
  }
]

// const event = [
//   {
//     description: chance.sentence({words:3}),
//     start:chance.date({month:5, year: 2018, day})
//   }
// ]

const seed = ()=> 
Promise.each(admins, admin => User.create(admin))
const main = () => {
  console.log(chalk.blue('Syncing db...'))
  db.sync({ force: true })
    .then(() => {
      console.log(chalk.blue('Seeding database...'))
      return seed()
    })
    .then(() => {
      console.log(chalk.green('Seeding succeeded'))
    })
    .catch(err => {
      console.log(chalk.red('Error while seeding'))
      console.log(chalk.red(err.stack))
    })
    .finally(() => {
      db.close()
      return null
    })
}

main()