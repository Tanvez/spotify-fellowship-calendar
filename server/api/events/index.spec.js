//const {expect} = require('chai')
const request = require('supertest')
const Event = require('../../db/models/event')
const User = require('../../db/models/user')
const db = require('../../db/db')
const app = require('../index')

  describe('Event routes', ()=>{
    before(()=>db.sync({force: true}))
     beforeEach((done)=>
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
     .then(()=>done())
     )
  )
  it('/GET /api/events', (done)=>{
      request(app)
      .get('/api/events')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((res)=>{
        expect(res.body).to.be.an.instanceof(Array )
        done()
      })
    })
  })
