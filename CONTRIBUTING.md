🧭 Contribution Guidelines for Mentofy
Thank you for considering contributing to Mentofy! Please follow the guidelines below to maintain consistency and code quality.

📁 Project Setup
bash
Copy
Edit
# Install dependencies
npm install

# Run with Docker
docker compose up
📂 Naming Conventions
To keep the codebase clean and readable, follow these file/folder naming rules:

Use kebab-case for file and folder names:
✅ learning-plan-service.js
❌ LearningPlanService.js

Use PascalCase for class names and custom types:
✅ class OpenRouterApi {}

Use camelCase for variables, functions, and methods:
✅ generatePlan()
❌ Generate_Plan()

For components (if using React later), use PascalCase for component file names:
✅ LearningPlanForm.jsx

✍️ Commit Guidelines
Use Conventional Commits:

feat: New feature

fix: Bug fix

docs: Documentation changes

refactor: Code restructure without behavior change

test: Adding or updating tests

Example:

bash
Copy
Edit
git commit -m "feat: add caching to learning plan service"
🔍 Code Style
Follow the ESLint rules defined in the project.

Add JSDoc comments for all exported functions and classes.

Make sure your code:

Runs without errors.

Passes all existing tests (if any).

📄 Pull Request Process
Fork the repo and create a new branch from main or develop.

Name the branch descriptively, e.g., fix/plan-validation.

Commit your changes using the conventional commit format.

Push the branch and open a Pull Request with a clear description of the changes.

Link any relevant issues.

🔒 Licensing and Permissions
Mentofy is under a restrictive license. It is not open for free public use. You may contribute but cannot reuse or distribute the codebase without explicit permission.

