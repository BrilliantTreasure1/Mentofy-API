// src/adapters/outbound/learningPlanRepository.js

/**
 * Description placeholder
 *
 * @type {*}
 */
const LearningPlanModel = require('./models/LearningPlan.js');

/**
 * Description placeholder
 *
 * @class LearningPlanRepository
 * @typedef {LearningPlanRepository}
 */
class LearningPlanRepository {
  /**
 * Description placeholder
 *
 * @async
 * @param {*} planData 
 * @returns {unknown} 
 */
async save(planData) {
    console.log('[📦 Saving to DB]', planData); 
    return await LearningPlanModel.create(planData);
  }
}

module.exports = LearningPlanRepository;
