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
   * @apiSuccessExample {json} Success-Response:
   {
    "status": 200,
    "result": [
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
   ],
   "message": ""
   }
   */
  Route
    .get('/exercises', 'ExerciseController.getList')
    .middleware(['auth'])

  /**
   * @api {post} /exercises Create exercise
   * @apiName Exercise
   * @apiGroup Exercises
   *
   * @apiParam {String} title Title
   * @apiParam {String} image Image URL
   * @apiParam {String} category Category
   * @apiParam {String} type Type
   * @apiParam {String} video Video URL
   * @apiParam {String} description Description
   *
   * @apiSuccess {Number} status Status code.
   * @apiSuccess {Array} result Result object
   * @apiSuccessExample {array} Success-Response:
   {
    "status": 201,
    "result": {
        "id": 1,
        "title": "Barbell Deadlift",
        "category": "Gym",
        "image": "https://www.bodybuilding.com/fun/images/2013/deadlift-dominance-5-tips-for-massive-pulling-power_c.jpg",
        "type": "Muscle Back",
        "video": "https://www.youtube.com/watch?v=PUNxkzCjWNk",
        "description": "This isn't the first time we've written about one of Barber's monstrous deadlifts, and we're guessing that it's nowhere near our last",
        "created_at": "2019-06-27 13:07:39",
        "updated_at": "2019-06-27 13:07:39"
    },
    "message": ""
   }
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
