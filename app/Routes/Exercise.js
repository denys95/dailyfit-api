'use strict'

module.exports = (Route) => {
  /**
   * @api {get} /exercises Exercises list
   * @apiName Exercise
   * @apiGroup Exercises
   *
   * @apiParam {String} email User email
   * @apiParam {String} password User password
   *
   * @apiSuccess {Number} status Status code.
   * @apiSuccess {Array} result Result object
   * @apiSuccessExample {array} Success-Response:
   [
   {
      "id": 5,
      "title": "Barbell Deadlift",
      "category": "Gym",
      ...
   }, {
      "id": 4,
      "title": "Discover how you can sprint faster",
      "category": "Athletics",
      ...
   },
   ...
   ]
   */
  Route
    .get('/exercises', 'ExerciseController.getList')
    .middleware(['auth'])

  /**
   * @api {post} /exercises Create exercise
   * @apiName Exercise
   * @apiGroup Exercises
   *
   * @apiParam {String} email User email
   * @apiParam {String} password User password
   *
   * @apiSuccess {Number} status Status code.
   * @apiSuccess {Array} result Result object
   * @apiSuccessExample {array} Success-Response:
   [
   {
      "id": 5,
      "title": "Barbell Deadlift",
      "category": "Gym",
      ...
   }, {
      "id": 4,
      "title": "Discover how you can sprint faster",
      "category": "Athletics",
      ...
   },
   ...
   ]
   */
  Route
    .post('/exercises', 'ExerciseController.create')
    .middleware(['auth'])

  /**
   * @api {get} /exercises/:id Get exercise
   * @apiName Exercise
   * @apiGroup Exercises
   *
   * @apiParam {Number} id Exercise id
   *
   * @apiSuccess {Number} status Status code.
   * @apiSuccess {Object} exercise Result object
   * @apiSuccessExample {json} Success-Response:
   {
      "id": 5,
      "title": "Barbell Deadlift",
      "category": "Gym",
      ...
   }
   */
  Route
    .get('/exercises/:id', 'ExerciseController.get')
    .middleware(['auth'])

  /**
   * @api {post} /exercises/:id Update exercise
   * @apiName Exercise
   * @apiGroup Exercises
   *
   * @apiParam {Number} id Exercise id
   *
   * @apiSuccess {Number} status Status code.
   * @apiSuccess {Object} exercise Result object
   * @apiSuccessExample {json} Success-Response:
   {
      "status": 200,
      "result": {
        "id": 1,
        "title": "Running",
        ...
      },
      "message": ""
   }
   */
  Route
    .post('/exercises/:id', 'ExerciseController.update')
    .middleware(['auth'])

  /**
   * @api {delete} /exercises/:id Delete exercise
   * @apiName Exercise
   * @apiGroup Exercises
   *
   * @apiParam {Number} id Exercise id
   *
   * @apiSuccess {Number} status Status code.
   * @apiSuccess {Object} exercise Result object
   * @apiSuccess {String} message Result message
   * @apiSuccessExample {json} Success-Response:
   {
      "status": 200,
      "result": "",
      "message": ""
   }
   */
  Route
    .delete('/exercises/:id', 'ExerciseController.deleteExercise')
    .middleware(['auth'])
}
