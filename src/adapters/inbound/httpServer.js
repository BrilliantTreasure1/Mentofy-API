/**
 * Description placeholder
 *
 * @type {*}
 */
const express = require('express');
/**
 * Description placeholder
 *
 * @type {*}
 */
const cors = require('cors');

/**
 * Description placeholder
 *
 * @param {*} learningPlanService 
 * @returns {*} 
 */
function createHttpServer(learningPlanService) {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.post('/generate-plan', async (req, res) => {
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

  return app;
}

module.exports = createHttpServer;
