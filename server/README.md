# Portfolio Server

Backend server for the portfolio website built with Express.js.

## Features

- RESTful API endpoints
- Contact form handling
- Projects data API
- Skills data API
- About information API
- CORS enabled for frontend integration
- Static file serving for React build

## API Endpoints

- `GET /api/health` - Server health check
- `POST /api/contact` - Handle contact form submissions
- `GET /api/projects` - Get portfolio projects
- `GET /api/skills` - Get skills information
- `GET /api/about` - Get about information

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install development dependencies:
```bash
npm install nodemon --save-dev
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## Environment Variables

Create a `.env` file in the server directory:

```env
PORT=5000
NODE_ENV=development
```

## Project Structure

```
server/
├── index.js              # Main server file
├── routes/
│   └── api.js           # API routes
├── middleware/
│   └── errorHandler.js  # Error handling middleware
├── config/
│   └── database.js      # Database configuration
├── package.json
└── README.md
```

## Integration with Frontend

The server is configured to serve the React frontend build files. Make sure to:

1. Build your React app: `npm run build` (in client directory)
2. The server will serve the build files from `../client/build`

## Adding New Features

- Add new routes in `routes/api.js`
- Add middleware in `middleware/` directory
- Update database configuration in `config/database.js` 