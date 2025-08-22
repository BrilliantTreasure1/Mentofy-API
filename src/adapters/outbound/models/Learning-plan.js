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
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  goal: String,
  level: String,
  dailyTime: Number,
  email: { type: String, },
  plan: String,
  structuredPlan: Object,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LearningPlan', LearningPlanSchema);
