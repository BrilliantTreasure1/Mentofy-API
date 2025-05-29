const express = require('express');
const cors = require('cors');

function createHttpServer(learningPlanService) {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.post('/generate-plan', async (req, res) => {
    try {
      const { name, goal, level, dailyTime } = req.body;

      // اعتبارسنجی ساده
      if (!name || !goal || !level || !dailyTime) {
        return res.status(400).json({ error: 'لطفاً همه فیلدها را وارد کنید.' });
      }

      const plan = await learningPlanService.generatePlan({ name, goal, level, dailyTime });
      res.json({ plan });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return app;
}

module.exports = createHttpServer;
