# Mentofy Backend

Mentofy is an AI-powered platform that generates personalized learning plans based on users' goals, skill level, and available time. This backend service handles API requests, communicates with OpenRouter, caches results, and persists data in MongoDB.

---

## 🚀 Features

- Clean architecture (Hexagonal)
- Integration with OpenRouter API
- In-memory caching to prevent redundant requests
- MongoDB persistence
- Docker + Docker Compose support

---

## 🗂️ Project Structure

back-end/
├── Dockerfile
├── index.js
├── package.json
├── .env.example
├── src/
│ ├── config/
│ │ ├── database.js
│ │ └── env.js
│ ├── domain/
│ │ └── learningPlanService.js
│ ├── adapters/
│ │ ├── inbound/
│ │ │ └── httpServer.js
│ │ ├── outbound/
│ │ │ ├── models/
│ │ │ │ └── LearningPlan.js
│ │ │ ├── openRouterApi.js
│ │ │ ├── learningPlanRepository.js
│ │ │ └── memoryCache.js

yaml
Copy
Edit

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-org/mentofy.git
cd mentofy/back-end
2. Setup environment variables
bash
Copy
Edit
cp .env.example .env
# Edit .env and add your OpenRouter API key
3. Run Locally
bash
Copy
Edit
npm install
node index.js
🐳 Run with Docker
Ensure Docker is installed, then run:

bash
Copy
Edit
docker compose up --build
The backend will be available at http://localhost:3000.

📬 API Endpoint
POST /api/learning-plan
Generates a personalized learning plan.

Request Body
json
Copy
Edit
{
  "name": "Ali",
  "email": "ali@example.com",
  "goal": "Become a DevOps Engineer",
  "level": "beginner",
  "dailyTime": 2
}
Response
json
Copy
Edit
{
  "name": "Ali",
  "goal": "Become a DevOps Engineer",
  "level": "beginner",
  "dailyTime": 2,
  "email": "ali@example.com",
  "plan": "Your personalized plan goes here..."
}
🛠 Environment Variables
Key	Description
PORT	API server port
API_KEY	OpenRouter API key
OPENROUTER_URL	OpenRouter API endpoint
MONGO_URI	MongoDB connection string

See .env.example for defaults.

📚 License
Custom license - Educational use and contributions allowed. Commercial use prohibited.
See [LICENSE](./LICENSE) for full terms.

🤝 Contributing
Pull requests are welcome. Please follow the project structure and use in-memory caching when calling external APIs.