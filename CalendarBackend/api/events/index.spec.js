const {expect} = require('chai')
const request = require('supertest')
const Event = require('../../db/models/event')
const User = require('../../db/models/user')
const db = require('../../db/db')
const app = require('../../index')// must be root index.js where express exist

  describe('Event routes', ()=>{
    before(()=>db.sync({force: true}))
     beforeEach(()=>
    User.create({ 
      id:1,
      firstName: 'Vesna',
       lastName: 'Tan',
       isAdmin: true,
       email: 'admin1@spotify-calendar.com',
       password: '123'
     })
     .then(()=>
      Event.create({
        description:'dancing',
        start:'2018-06-24 07:30:00.816772-04',
        end:'2018-06-24 07:30:00.816772-04',
        userId:1
     })
     )
  )
  it('/GET /api/events', (done)=>{
      request(app)
     .get('/api/events')
      .end((err, res)=>{
         expect(res.statusCode).to.equal(200)
         expect(res.body).to.be.an('array') 
        done()
      })
    })
    it('/POST /api/events', (done)=>{
      //TODO ENTER TEST HERE
    })
  })
