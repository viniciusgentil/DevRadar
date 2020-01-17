const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// CONEXÃO COM MONGODB ATLAS
mongoose.connect('mongodb+srv://usr_mastrombeta:P3rd56kjT@vbg-irxpy.mongodb.net/devradar?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Habilita requisições de outros endereços
app.use(cors());

// Indica o formato que a API irá trabalhar
app.use(express.json());

// Importa as rotas na API 
app.use(routes);


app.listen(3333, () => {
    console.log('Servidor no ar...');
})