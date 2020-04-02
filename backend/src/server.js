const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect(
  'mongodb+srv://yuriduarte:pEOeVPii319YNuhQ@omnistack-8lgu2.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
// GET, POST, PUT, DELETE

// req.query = Acessar informações enviadas através da url Ex: base_url/users?idade=20
// req.params = Acessar route params (para edição) Ex: base_url/id
// req.body = Acessar o corpo da requisição (para criação e edição de registros.)

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);