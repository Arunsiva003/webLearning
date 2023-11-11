const express = require('express')
const adminRoute = require('./routes/admin')
const storeRoute = require('./routes/store')
const app = express()
app.use(adminRoute);
app.use(storeRoute);

const server = app.listen(3000)