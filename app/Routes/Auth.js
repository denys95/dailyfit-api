module.exports = (Route) => {
  /**
   * @api {post} /auth/register Registration
   * @apiName UserAuth
   * @apiGroup Auth
   *
   * @apiParam {String} email User email
   * @apiParam {String} password User password
   *
   * @apiSuccess {Number} status Status code.
   * @apiSuccess {Object} result Result object
   * @apiSuccess {String} result.token JWT token string
   * @apiSuccess {Object} result.user User model
   * @apiSuccessExample {json} Success-Response:
   {
      "user": {
          "id": 1,
          "email": "user@mail.com",
          ...
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
   }
   */
  Route
    .post('/auth/register', 'AuthController.register')
    .middleware('guest')

  /**
   * @api {post} /auth/login Login
   * @apiName UserAuth
   * @apiGroup Auth
   *
   * @apiParam {String} email User email or username
   * @apiParam {String} password User password
   *
   * @apiSuccess {Number} status Status code.
   * @apiSuccess {Object} result Result object
   * @apiSuccess {String} result.token JWT token string
   * @apiSuccess {Object} result.user User model
   * @apiSuccessExample {json} Success-Response:
   {
      "user": {
          "id": 1,
          "email": "user@mail.com",
          ...
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
   }
   */
  Route
    .post('/auth/login', 'AuthController.login')
    .middleware('guest')

  /**
   * @api {get} /auth/logout Logout
   * @apiName UserAuth
   * @apiGroup Auth
   *
   * @apiSuccess {Number} status Status code
   * @apiSuccess {String} message Message string
   * @apiSuccessExample {json} Success-Response:
   {
      "status": 200,
      "message": "Logout success"
   }
   */
  Route
    .get('/auth/logout', 'AuthController.logout')
    .middleware(['auth'])
}
