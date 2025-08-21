const express = require('express');
const cors = require('cors');
const createLearningPlanRoutes = require('./routes/ learning-plan-routes');
const userRoutes = require('./routes/sign-up-route');

function createHttpServer(learningPlanService) {
  const app = express();
  app.use(express.json());
  app.use(cors());

  // Mount routes
  app.use('/learning-plan', createLearningPlanRoutes(learningPlanService));

  app.use('/', userRoutes);


  return app;
}

module.exports = createHttpServer;
