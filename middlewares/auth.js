const isLogin = async (req, res, next) => {
  if (req.session.loggedIn) {
    next()
    return
  } else {
    res.redirect('/auth/login')
  }
}

module.exports = isLogin
