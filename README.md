# Community Cooks

Community Cooks is a vanilla web application for discovering recipes, planning meals, cooking step by step, contributing recipes, and connecting food with community action.

## Technical stack

- HTML5 for page structure
- CSS3 for responsive layout and visual design
- JavaScript for recipe data, filtering, Cook Mode, saved recipes, history, meal planning, challenges, points, and shopping lists
- Python standard library for the local development server and lightweight API status endpoints
- Browser localStorage for free, account-free local persistence
- No React, Next.js, TypeScript, Tailwind, drag-and-drop site builders, or paid services are required

## Run locally

```bash
python server.py
```

Then open http://127.0.0.1:8000

The Python server also exposes a small health endpoint at /api/status.

## Main pages

- Home
- Recipe library and search/filtering
- Individual recipe pages
- Cook Mode
- Saved Recipes
- Cooking History
- Shopping List
- Weekly Meal Planner
- Weekly Challenges
- Points and Leaderboard
- Community
- Add Recipe

## Data model

Starter recipes are stored as explicit JavaScript objects. Each recipe has its own image URL, ingredients, instructions, description, cuisine, category tags, and creator attribution. User-submitted recipes and progress are stored locally in the browser.

## Design goal

The project intentionally keeps the source understandable and inspectable. The technical work is implemented directly with the core web languages rather than hidden behind a framework or site builder.
