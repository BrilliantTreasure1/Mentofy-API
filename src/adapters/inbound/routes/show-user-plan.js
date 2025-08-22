const express = require('express');
const router = express.Router();
const authMiddleware = require('../Controller/JWT-Middleware');
const LearningPlan = require('../../outbound/models/Learning-plan');

router.get('/my-plans', authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const plans = await LearningPlan.find({ userId });
    res.json(plans);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
