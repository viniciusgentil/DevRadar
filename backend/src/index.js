const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const http = require('http');
const cors = require('cors');
const { setupWebsocket } = require('./websocket');

const app = express();

// EXTRAI O SERVIDOR HTTP DO EXPRESS PARA PODER TRABALHAR COM PROTOCOLO WEBSOCKET
const server = http.Server(app);

// INICIALIZA AS CONFIGURAÇÕES DO WEBSOCKET
setupWebsocket();


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


server.listen(3333, () => {
    console.log('Servidor no ar...');
})