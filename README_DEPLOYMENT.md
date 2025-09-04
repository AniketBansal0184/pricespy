# Deployment Guide: Deploy Frontend and Backend on Vercel from Scratch

This guide will help you deploy both your React frontend and Express backend (as serverless functions) on Vercel.

---

## Step 1: Prepare Your Project Structure

1. **Frontend**: Your React app should be in the root or a subfolder (e.g., `/` or `/frontend`).
2. **Backend**: Move your Express backend code into the `/api` folder at the root of your project. Each API route should be a separate file exporting a handler function.

Example structure:
```
/api
  deleteUser.js
/src
  (React app files)
/package.json
/vercel.json
```

---

## Step 2: Convert Express Backend to Serverless Functions

- Each Express route becomes a separate file in `/api`.
- For example, `deleteUser.js`:

```js
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  try {
    const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(userId);

    if (authError) {
      return res.status(500).json({ error: authError.message });
    }

    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
```

---

## Step 3: Configure `vercel.json`

Create a `vercel.json` file in the root with:

```json
{
  "version": 2,
  "builds": [
    { "src": "src/**/*", "use": "@vercel/static-build" },
    { "src": "api/**/*.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/api/$1.js" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

Adjust paths as needed.

---

## Step 4: Set Environment Variables on Vercel

In your Vercel dashboard:

- Go to your project > Settings > Environment Variables
- Add the following variables:

```
VITE_SUPABASE_URL=https://your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
VITE_PRODUCTION_DOMAIN=https://your-vercel-domain
VITE_API_BASE_URL=https://your-vercel-domain/api
```

---

## Step 5: Update Frontend API Calls

- Update your frontend to call the backend API using the environment variable `VITE_API_BASE_URL`.
- For example:

```js
const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/deleteUser`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ userId: user.id }),
});
```

---

## Step 6: Deploy to Vercel

- Push your code to GitHub (or your Git provider).
- Connect your repository to Vercel.
- Vercel will build and deploy your frontend and backend automatically.

---

## Step 7: Test Your Deployment

- Visit your Vercel URL.
- Test the delete profile functionality.
- Check logs in Vercel dashboard for any errors.

---

If you want, I can help you with each step interactively. Just let me know where you want to start!
