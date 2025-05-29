require('dotenv').config();
const connectToDatabase = require('./src/config/database');
const OpenRouterApi = require('./src/adapters/outbound/open-router-api');
const LearningPlanService = require('./src/domain/learning-plan-service');
const createHttpServer = require('./src/adapters/inbound/http-server');
const LearningPlanModel = require('./src/adapters/outbound/models/Learning-plan');
const MemoryCache = require('./src/adapters/outbound/memory-cache');
const { PORT } = require('./src/config/env');

async function bootstrap() {
  await connectToDatabase();

  const openRouterApi = new OpenRouterApi();
  const cache = new MemoryCache();
  const learningPlanService = new LearningPlanService(openRouterApi,LearningPlanModel , cache); // اگر model نداری فعلاً null بده
  const app = createHttpServer(learningPlanService);

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

bootstrap();
