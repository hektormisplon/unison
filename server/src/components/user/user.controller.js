const User = require('./user.model')

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

exports.getUser = async (req, res) => {
  const { params } = req
  try {
    const user = await User.findById(params.id)
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

exports.deleteUsers = async (req, res) => {
  try {
    const users = await User.deleteMany()
    res.status(410).json(users)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

exports.deleteUser = async (req, res) => {
  const { params } = req
  try {
    const user = await User.findOneAndDelete({ _id: params.id })
    res.status(410).json(user)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}
