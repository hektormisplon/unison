const request = require('supertest')

const { app } = require('../src/app')

describe('Authentication endpoints', () => {
  it('POST invalid data to /api/signup returns 400', async done => {
    const res = await request(app).post('/api/signup').send({
      foo: 'bar',
    })
    expect(res.statusCode).toEqual(400)
    done()
  })
  it('POST invalid data /api/signin returns 400', async done => {
    const res = await request(app).post('/api/signin').send({
      foo: 'bar',
    })
    expect(res.statusCode).toEqual(400)
    done()
  })
})
