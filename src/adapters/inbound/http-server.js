const express = require('express');
const cors = require('cors');
const createLearningPlanRoutes = require('./routes/ learning-plan-routes');

function createHttpServer(learningPlanService) {
  const app = express();
  app.use(express.json());
  app.use(cors());

  // Mount routes
  app.use('/learning-plan', createLearningPlanRoutes(learningPlanService));

  

  return app;
}

module.exports = createHttpServer;
