const express = require('express');
const app = express();
const port = 3000;

const morgan = require('morgan');
app.use(morgan('tiny'));

// Set de la variable global port con el valor que nos da el servidor (process.env.PORT)
// o el que definimos nosotros a mano.
app.set('port', process.env.PORT || port);

app.listen(app.get('port'), () =>
  console.log(`Example app listeningn on port ${port}`)
);

app.get('/', (req, res) => res.send('Hello World'));
