const express = require('express');
const basicAuth = require('express-basic-auth');
const app = express();
app.use(basicAuth({
  users: { 'partners': process.env.SITE_PASSWORD },
  challenge: true
}));
app.use(express.static('.'));
app.listen(process.env.PORT);
