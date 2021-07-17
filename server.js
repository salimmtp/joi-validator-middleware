const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const authRoutes = require('./src/routers/authorizationRoutes');

// routes
app.use('/api/v1/', authRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log('listening');
});
