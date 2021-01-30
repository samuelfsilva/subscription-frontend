const express = require('express');
const path = require('path');

const app = express();

const route = express.Router({ strict: true });

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

route.get('', redirectionHttps, (req, res) => res.sendFile(path.join(__dirname, '..', '..', 'www', 'main.html')));
route.get('/*', redirectionHttps, (req, res) => res.sendFile(path.join(__dirname, '..', '..', 'www', 'main.html')));


app.use(route);

app.listen(port);