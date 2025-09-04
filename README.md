# Price Radar Nexus

A modern price comparison web application built with React, TypeScript, Vite, and Supabase. This app allows users to compare prices across different stores and categories, with user authentication and profile management.

## Features

- 🔍 **Product Search & Comparison**: Search and compare products across multiple categories
- 👤 **User Authentication**: Secure login/signup with Supabase
- 📊 **Price Tracking**: Track prices and find the best deals
- 🛒 **Shopping Lists**: Create and manage shopping lists
- 📍 **Store Locator**: Find nearby stores
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: Radix UI, Tailwind CSS, Shadcn/ui
- **Backend**: Supabase (Database & Authentication)
- **Deployment**: Vercel (Frontend + Serverless Functions)
- **State Management**: React Query, Context API

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd price-radar-nexus
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_API_BASE_URL=http://localhost:3001
```

4. Start the development server:
```bash
npm run dev
```

5. For backend development, start the Express server:
```bash
node server.js
```

## Deployment

### Vercel Deployment

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

4. Set environment variables in Vercel dashboard:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `VITE_API_BASE_URL` (set to your Vercel domain + `/api`)

## Project Structure

```
├── api/                    # Serverless functions for Vercel
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── types/             # TypeScript type definitions
│   └── integrations/      # External service integrations
├── server.js              # Express server for local development
├── vercel.json            # Vercel configuration
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
