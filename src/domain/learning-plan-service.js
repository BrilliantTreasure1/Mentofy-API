const { parsePlan } = require("../Middleware/planParser");

class LearningPlanService {
    constructor(openRouterApi, learningPlanModel, cache) {
      this.openRouterApi = openRouterApi;
      this.learningPlanModel = learningPlanModel;
      this.cache = cache;
    }
  
    /**
 * Description placeholder
 *
 * @async
 * @param {*} data 
 * @returns {unknown} 
 */
async generateAndSavePlan(data , userId) {
      const { email, name, goal, level, dailyTime } = data;
      const cacheKey = `${email}-${name}-${goal}-${level}-${dailyTime}`;
  
      if (this.cache.has(cacheKey)) {
        console.log('[⚡ Cache] Returning cached plan...');
        return this.cache.get(cacheKey);
      }
  
      const prompt = `
اسم من ${name} هست. می‌خوام ${goal} یاد بگیرم. سطح من ${level} و روزی ${dailyTime} دقیقه وقت دارم.
لطفاً یک برنامه یادگیری ۶ ماهه برای من بساز که شامل جزئیات هفته‌ای و روزانه باشد.

**مهم:** خروجی فقط JSON باشد و هیچ متن اضافه‌ای نداشته باشد.
ساختار JSON باید به شکل زیر باشد:

{
  "months": [
    {
      "name": "ماه اول",
      "weeks": [
        {
          "name": "هفته ۱",
          "days": [
            {"day": "شنبه", "exercise": "", "details": ""}
          ]
        }
      ]
    }
  ],
  "tips": ["", ""]
}
`;

      const messages = [
        { role: 'system', content: 'شما یک مربی حرفه‌ای برنامه‌ریزی یادگیری هستید ...' },
        { role: 'user', content: prompt }
      ];
  
      const plan = await this.openRouterApi.createChatCompletion({ model: 'microsoft/mai-ds-r1:free', messages });

      const structuredPlan = plan;


      //const structuredPlan = parsePlan(plan);

      
      // save in cache
      this.cache.set(cacheKey, plan);
  
       // save in database
    if (this.learningPlanModel) {
      await this.learningPlanModel.create({
        userId,
        email,
        name,
        goal,
        level,
        dailyTime,
        plan,
        structuredPlan,
      });
    }
  
      return  plan;
    }
  }
  
  module.exports = LearningPlanService;
  