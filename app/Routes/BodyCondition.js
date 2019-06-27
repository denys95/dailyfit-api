'use strict'

module.exports = (Route) => {

  /**
   * @api {post} /conditions Create Body condition
   * @apiName Body Condition
   * @apiGroup Body Condition
   *
   * @apiParam {Date} date Date
   * @apiParam {Decimal} weight Image URL
   * @apiParam {Decimal} height Category
   * @apiParam {Decimal} chest Type
   * @apiParam {Decimal} arms Video URL
   * @apiParam {Decimal} abs Description
   * @apiParam {Decimal} muscle_back Description
   * @apiParam {Decimal} legs Description
   *
   * @apiSuccess {Number} status Status code.
   * @apiSuccess {Array} result Result object
   * @apiSuccessExample {array} Success-Response:
   {
    "status": 201,
    "result": {
      "date": "2019-01-01",
      "weight": 70.3,
      "height": 183.4,
      "chest": 40.6,
      "arms": 20.9,
      "abs": 40.7,
      "muscle_back": 60.5,
      "legs": 30.2
    },
    "message": ""
   }
   */
  Route
    .post('/conditions', 'BodyConditionController.create')
    .middleware(['auth'])

  /**
   * @api {get} /conditions/:id Get Body condition
   * @apiName Exercise
   * @apiGroup Exercises
   *
   * @apiParam {Number} id Body condition id
   *
   * @apiSuccess {Number} status Status code.
   * @apiSuccess {Object} exercise Result object
   * @apiSuccessExample {json} Success-Response:
   {
    "status": 200,
    "result": {
      "date": "2019-01-01",
      "weight": 70.3,
      "height": 183.4,
      "chest": 40.6,
      "arms": 20.9,
      "abs": 40.7,
      "muscle_back": 60.5,
      "legs": 30.2
    },
    "message": ""
   }
   */
  Route
    .get('/conditions/:id', 'BodyConditionController.get')
    .middleware(['auth'])

  /**
   * @api {post} /conditions/:id Update Body condition
   * @apiName Exercise
   * @apiGroup Exercises
   *
   * @apiParam {Number} id Body condition id
   * @apiParam {Date} date Date
   * @apiParam {Decimal} weight Weight
   * @apiParam {Decimal} height Height
   * @apiParam {Decimal} chest Chest
   * @apiParam {Decimal} arms Arms
   * @apiParam {Decimal} abs Abs
   * @apiParam {Decimal} muscle_back Muscle back
   * @apiParam {Decimal} legs Legs
   *
   * @apiSuccess {Number} status Status code.
   * @apiSuccess {Object} exercise Result object
   * @apiSuccessExample {json} Success-Response:
   {
    "status": 200,
    "result": {
      "date": "2019-01-01",
      "weight": 70.3,
      "height": 183.4,
      "chest": 40.6,
      "arms": 20.9,
      "abs": 40.7,
      "muscle_back": 60.5,
      "legs": 30.2
    },
    "message": ""
   }
   */
  Route
    .post('/exercises/:id', 'BodyConditionController.update')
    .middleware(['auth'])

  /**
   * @api {delete} /conditions/:id Delete Body condition
   * @apiName Exercise
   * @apiGroup Exercises
   *
   * @apiParam {Number} id Body condition id
   *
   * @apiSuccess {Number} status Status code.
   * @apiSuccess {Object} exercise Result object
   * @apiSuccess {String} message Result message
   * @apiSuccessExample {json} Success-Response:
   {
      "status": 204,
      "result": "",
      "message": "Condition was deleted successfully"
   }
   */
  Route
    .delete('/conditions/:id', 'BodyConditionController.deleteCondition')
    .middleware(['auth'])
}
