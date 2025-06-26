// Database configuration
// You can add MongoDB, PostgreSQL, or other database configurations here

const config = {
  development: {
    // Add your development database config here
    // Example for MongoDB:
    // mongoURI: 'mongodb://localhost:27017/portfolio_dev'
  },
  production: {
    // Add your production database config here
    // Example for MongoDB Atlas:
    // mongoURI: process.env.MONGODB_URI
  }
};

module.exports = config[process.env.NODE_ENV || 'development']; 