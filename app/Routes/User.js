'use strict'

module.exports = (Route) => {
  /**
   * @api {get} /users/:id Exercises list
   * @apiName User
   * @apiGroup Users
   *
   * @apiParam {Number} id User id
   *
   * @apiSuccess {Number} status Status code.
   * @apiSuccess {Array} result Result object
   * @apiSuccessExample {json} Success-Response:
   {
    "status": 200,
    "result": {
      "id": 1,
      "email": "user@mail.com",
      "name": "John Doe",
      "date_of_birth": "1995-01-01",
      "language": "en",
      "gender": "male"
    },
    "message": ""
   }
   */
  Route
    .get('/users/:id', 'UserController.get')
    .middleware(['auth'])

  /**
   * @api {post} /user/:id Update user
   * @apiName User
   * @apiGroup Users
   *
   * @apiParam {String} email User email
   * @apiParam {String} name User name
   * @apiParam {String} date_of_birth Date of birth
   * @apiParam {String} language User language code
   * @apiParam {String} gender User gender
   *
   * @apiSuccess {Number} status Status code.
   * @apiSuccess {Object} exercise Result object
   * @apiSuccessExample {json} Success-Response:
   {
      "status": 200,
      "result": {
        "id": 1,
        "email": "user@mail.com",
        "name": "Jane Doe",
        "date_of_birth": "1995-01-01",
        "language": "en",
        "gender": "female",
      },
      "message": ""
   }
   */
  Route
    .post('/users/:id', 'UserController.update')
    .middleware(['auth'])

  /**
   * @api {delete} /users/:id Delete user
   * @apiName User
   * @apiGroup Users
   *
   * @apiParam {Number} id User id
   *
   * @apiSuccess {Number} status Status code.
   * @apiSuccess {Object} exercise Result object
   * @apiSuccess {String} message Result message
   * @apiSuccessExample {json} Success-Response:
   {
      "status": 204,
      "result": "",
      "message": "User was deleted successfully"
   }
   */
  Route
    .delete('/users/:id', 'UserController.deleteExercise')
    .middleware(['auth'])
}
