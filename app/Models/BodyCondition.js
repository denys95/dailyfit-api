'use strict'

const Model = use('Model')

class BodyCondition extends Model { }

BodyCondition.create = async ({
  user_id,
  date,
  weight,
  height,
  chest,
  arms,
  abs,
  muscle_back,
  legs,
}) => {
  try {
    const bodyCondition = new BodyCondition()
    bodyCondition.user_id = user_id
    bodyCondition.date = date
    bodyCondition.weight = weight
    bodyCondition.height = height
    bodyCondition.chest = chest
    bodyCondition.arms = arms
    bodyCondition.abs = abs
    bodyCondition.muscle_back = muscle_back
    bodyCondition.legs = legs
    await bodyCondition.save()

    return {
      status: 200,
      result: bodyCondition,
    }
  } catch (e) {
    return {
      status: 500,
      result: 'error',
      message: e.code,
    }
  }
}

module.exports = BodyCondition
