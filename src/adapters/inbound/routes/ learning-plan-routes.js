const express = require('express');
const router = express.Router();

const authMiddleware = require('../Controller/JWT-Middleware');

module.exports = (learningPlanService) => {
  router.post('/generate-plan',authMiddleware ,async (req, res) => {
    try {
      const { name, goal, level, dailyTime } = req.body;
      const userId =  req.userId;

      if (!name || !goal || !level || !dailyTime) {
        return res.status(400).json({ error: 'لطفاً همه فیلدها را وارد کنید.' });
      }

      const plan = await learningPlanService.generateAndSavePlan({ name, goal, level, dailyTime } , userId);
      res.json({ plan });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
