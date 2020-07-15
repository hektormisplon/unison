const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')

let mongo

beforeAll(async () => {
  mongo = new MongoMemoryServer()
  const mongoUri = await mongo.getUri()
  await mongoose.connect(mongoUri)
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongo.stop()
})

describe('...', () => {
  it('...', async () => {
    const User = mongoose.model('User', new mongoose.Schema({ name: String }))
    const count = await User.count()
    expect(count).toEqual(0)
  })
})
