const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

const homeRoute = require('./routes/home');

const adminRoutes = require('./routes/admin');
const staffRoutes = require('./routes/staff');
const cashierRoutes = require('./routes/cashier');
const customerRoutes = require('./routes/customer');

const errorRoute = require('./routes/404');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use('/staff', staffRoutes);
app.use('/cashier', cashierRoutes);
app.use('/customer', customerRoutes);

app.use('/', homeRoute);

app.use(errorRoute);

app.listen(PORT);
