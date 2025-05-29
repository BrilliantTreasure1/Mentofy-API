/**
 * Description placeholder
 *
 * @type {*}
 */
const mongoose = require('mongoose');

/**
 * Description placeholder
 *
 * @type {*}
 */
const LearningPlanSchema = new mongoose.Schema({
  name: String,
  goal: String,
  level: String,
  dailyTime: Number,
  email: { type: String, },
  plan: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LearningPlan', LearningPlanSchema);
