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

  Route
    .post('/exercises', 'ExerciseController.create')
    .middleware(['auth'])

  /**
   * @api {get} /exercises Get exercise
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
}
