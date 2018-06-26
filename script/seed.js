const chance = require('chance')
const chalk = require ('chalk')
const Promise = require('bluebird')

const {
  db, 
  User,
  Event
} = require ('../CalendarBackend/db')

const admins = [
 { 
   id:1,
   firstName: 'Vesna',
    lastName: 'Tan',
    isAdmin: true
  }
]

const events = [
  {
    description:'dancing',
    start:'2018-06-24 07:30:00.816772-04',
    end:'2018-06-24 07:30:00.816772-04',
    userId:1
 },
 {
  description:'swimming',
  start:'2018-06-25 07:30:00.816772-04',
  end:'2018-06-25 07:30:00.816772-04',
  userId:1
},
{
  description:'walking',
  start:'2018-06-26 07:30:00.816772-04',
  end:'2018-06-26 07:30:00.816772-04',
  userId:1
},
{
  description:'BIRD WATCHING',
  start:'2018-06-27 07:30:00.816772-04',
  end:'2018-06-27 07:30:00.816772-04',
  userId:1
}

]


const seed = ()=> 
Promise.each(admins, admin => User.create(admin))
        .then(()=>Promise.each(events, event=>Event.create(event)))
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