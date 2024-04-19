const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const MONGODB_URI = `mongodb+srv://rittick:XLs9CMtRHlOGAmi8@cluster0.9bqyrns.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const PORT = 3000;

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const moderatorRoutes = require('./routes/moderator');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors);

app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/moderator', moderatorRoutes);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    return app.listen(PORT);
  })
  .catch((err) => console.log(err));
