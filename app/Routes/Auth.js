/* Auth.js */
module.exports = (Route) => {
  Route
    .post('/auth/register', 'AuthController.register')
    .middleware('guest')

  Route
    .post('/auth/login', 'AuthController.login')
    .middleware('guest')

  Route
    .get('/auth/logout', 'AuthController.logout')
    .middleware(['auth'])
}
