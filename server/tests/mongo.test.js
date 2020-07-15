require('dotenv/config')
const { MongoClient } = require('mongodb')

describe('insert', () => {
  let connection
  let db

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_TEST_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    db = await connection.db()
  })

  afterAll(async () => {
    await connection.close()
  })

  it('Should insert a doucment into a collection', async () => {
    const users = db.collection('users')
    const data = { _id: 'id', name: 'Jon' }
    await users.insertOne(data)
    const user = await users.findOne({ _id: 'id' })
    expect(user).toEqual(data)
  })
})
