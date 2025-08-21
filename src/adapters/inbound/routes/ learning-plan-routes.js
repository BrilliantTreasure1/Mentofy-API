const express = require('express');
const router = express.Router();

module.exports = (learningPlanService) => {
  router.post('/generate-plan', async (req, res) => {
    try {
      const { name, goal, level, dailyTime } = req.body;

      if (!name || !goal || !level || !dailyTime) {
        return res.status(400).json({ error: 'لطفاً همه فیلدها را وارد کنید.' });
      }

      const plan = await learningPlanService.generatePlan({ name, goal, level, dailyTime });
      res.json({ plan });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
