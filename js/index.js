const express = require('express');

const app = express();
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const repository = require('./inMemoryWorkshop');
// const repository = require("./mongoWorkshop");

repository.init().then(() => {
  app.use(bodyParser.urlencoded({ extended: false }));

  // set the view engine to ejs
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '..', '/ejs'));
  app.use(express.static(path.join(__dirname, '..', 'css')));

  app.get('/', (req, res) => {
    repository.getWorkshopList()
      .then((workshops) => {
        res.render('index', {
          workshops,
        });
      });
  });

  app.get('/workshop', (req, res) => {
    console.log('get');
    res.render('workshop');
  });

  app.post('/workshop', (req, res) => {
    const { name } = req.body;
    const { description } = req.body;
    repository.addWorkshop(name, description).then(() => {
      repository.getWorkshopList()
        .then((workshops) => {
          res.render('index', {
            workshops,
          });
        });
    })
      .catch((e) => res.send(e.message));
  });

  app.get('/workshop/:name', (req, res) => {
    const workshopName = req.params.name;
    repository.getWorkshopByName(workshopName)
      .then((workshop) => {
        res.render('ejs/workshop', workshop);
      })
      .catch((e) => ejs.send(e.message));
  });

  app.post('/remove-workshop', (req, res) => {
    res.status(500).send('TODO');
  });

  app.post('/update-workshop', (req, res) => {
    res.status(500).send('TODO');
  });

  app.listen(3000, () => {
    console.log('Workshop app listening on port 3000!');
  });
});
