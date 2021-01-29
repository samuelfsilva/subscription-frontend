const express = require('express');
const path = require('path');

const app = express();

const port = 21085;

app.use(express.static(path.join(__dirname, '..', '..', 'www')));

const redirectionHttps = function (req, res, next) {
  if (req.get('X-Forwarded-Proto') === 'http') {
    const redirectTo = `https:\/\/${req.hostname}${req.url}`;
    res.redirect(301, redirectTo);
  } else {
    next();
  }
};

app.get('/*', redirectionHttps, function (req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'www', 'index.html'));
});

app.listen(port);