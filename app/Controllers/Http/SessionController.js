'use strict'

const User = use('App/Models/User')

class SessionController {
  async create({ request, auth, response, session }) {
    const { username, password } = request.only(['username', 'password'])
    const user = await User.findBy('username', username)

    if (!user) {
      session.flash({ loginError: 'Invalid username or password' })
      return response.redirect('/login')
    }

    const authenticated = await auth.attempt(username, password)

    if (authenticated) {
      return response.redirect('/')
    } else {
      session.flash({ loginError: 'Invalid username or password' })
      return response.redirect('/login')
    }
  }

  async destroy({ auth, response }) {
    await auth.logout()
    return response.redirect('/login')
  }
}

module.exports = SessionController