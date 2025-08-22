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
  
      const prompt = `اسم من ${name} هست. می‌خوام ${goal} یاد بگیرم. سطح من ${level} و روزی ${dailyTime} دقیقه وقت دارم. لطفاً یه برنامه یادگیری هفتگی و روز به روز به مدت ۶ ماهه برام طراحی کن.`;
  
      const messages = [
        { role: 'system', content: 'شما یک مربی حرفه‌ای برنامه‌ریزی یادگیری هستید ...' },
        { role: 'user', content: prompt }
      ];
  
      const plan = await this.openRouterApi.createChatCompletion({ model: 'microsoft/mai-ds-r1:free', messages });
  
      // ذخیره در کش
      this.cache.set(cacheKey, plan);
  
       // ✅ ذخیره در دیتابیس
    if (this.learningPlanModel) {
      await this.learningPlanModel.create({
        userId,
        email,
        name,
        goal,
        level,
        dailyTime,
        plan
      });
    }
  
      return plan;
    }
  }
  
  module.exports = LearningPlanService;
  