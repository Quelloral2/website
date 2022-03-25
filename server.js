const express = require('express');
const races = require('./races.json');

const app = express();

app.set('view engine, pug');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index.pug', {
      title: 'FORMULA 1 information',
      login: 'Log in or register',
      races: races.race_profiles
    });
});

app.get('/race_information', (req, res) => {
  const race = races.race_profiles.find(p => p.id === req.query.id);
  res.render('race_information.pug', {
    title: `${race.tagline}`,
    race,
  });
});

app.get('/login', (req, res) => {
    res.render('login.pug', {
      title: 'Log in or register',
      login
    });
});

server_port = 7000;

const server = app.listen(server_port, () => {
    console.log('Express running -> PORT', server_port);
})




