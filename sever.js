require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const sequelize = require('./config/database');

const app = express();
const server = http.createServer(app);

const userRoutes = require("./routes/userRoute");
const queueRoutes = require("./routes/questionRoute");
const reviewRoutes = require("./routes/reviewRoute");

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', limiter);
app.use("/api/users", userRoutes);
app.use("/api/questions", queueRoutes);
app.use("/api/reviews", reviewRoutes);
const PORT = process.env.PORT || 4004;

sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to database:', err);
  });

module.exports = { app, server };
