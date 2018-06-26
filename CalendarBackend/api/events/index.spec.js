const {expect} = require('chai')
const request = require('supertest')
const Event = require('../../db/models/event')
const User = require('../../db/models/user')
const db = require('../../db/db')
const app = require('../../index')// must be root index.js where express exist

  describe('Event routes', ()=>{
    beforeEach(()=>db.sync({force: true}))
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
         if (err) return done(err)
        done()
      })
    })
    
    it('/POST /api/events', (done)=>{
      let data = {
        "description":"swimming",
        "start":"2018-01-24 07:30:00.816772-04",
        "end":"2018-01-24 07:30:00.816772-04",
        "userId":"1"
      }
      request(app)
      .post('/api/events')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .end((err)=>{
        if (err) return done(err)
        done()
      })
    })
    
    it('/PUT /api/events', (done)=>{
      let data = {
        "id":"1",
        "description":"Go to the movies",
        "start":"2018-01-24 07:30:00.816772-04",
        "end":"2018-01-24 07:30:00.816772-04",
        "userId":"1"
      }
      request(app)
      .put('/api/events')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err)=>{
        if (err) return done(err)
        done()
      })
    })

    it('/DELETE /api/events/:id', (done)=>{
      request(app)
      .delete('/api/events/'+ '1')
      .expect(204,done)
    })

  })
