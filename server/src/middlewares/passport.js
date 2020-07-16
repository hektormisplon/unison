const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('../components/user/user.model')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
    },
    (email, password, done) => {
      User.findOne({ email }, (err, user) => {
        if (err) return done(err)
        if (!user) return done(null, false)
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) return done(err)
          if (isMatch) return done(null, user)
          if (!isMatch) return done(null, false)
        })
      })
    }
  )
)
