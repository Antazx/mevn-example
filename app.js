import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

const app = express();

//conexion a DB
//const uri = 'mongodb://localhost:27017/restaurants';
const uri = 'mongodb+srv://user:user@restaurants-mt0il.mongodb.net/restaurants?retryWrites=true&w=majority';

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};
mongoose.connect(uri, options).then(
  () => {
    console.log('Conectado a mongoDB');
  },
  (err) => {
    console.log('Se ha producido un fallo');
  }
);

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

/* // Rutas
app.get('/', (req, res) => {
  res.send('Hello World!');
}); */

app.use('/api', require('./routes/restaurant'));

// Middleware para Vue.js router modo history
import history from 'connect-history-api-fallback';
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3030);
app.listen(app.get('puerto'), () => {
  console.log('Example app listening on port' + app.get('puerto'));
});
