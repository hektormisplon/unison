const request = require('supertest')

const { app } = require('../src/app')

describe('GET Protected endpoints for non authenticated users', () => {
  it('GET /api/hubs returns a 401', async done => {
    const res = await request(app).get('/api/hubs')
    expect(res.statusCode).toEqual(401)
    done()
  })

  it('GET /api/users returns a 401', async done => {
    const res = await request(app).get('/api/users')
    expect(res.statusCode).toEqual(401)
    done()
  })
})

describe('POST Protected endpoints for non authenticated users', () => {
  it('POST to /api/hubs returns a 401', async done => {
    const res = await request(app).post('/api/hubs').send({
      name: 'testing',
    })
    expect(res.statusCode).toEqual(401)
    done()
  })
})
