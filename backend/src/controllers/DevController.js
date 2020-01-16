const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// Métodos conforme operação: index (listar todos), show (buscar um), store (criar), update (atualizar), destroy (deletar)

module.exports = {

    async index(request, response) {

        const devs = await Dev.find();

        return response.json(devs);

    },

    async store(request, response) {
    
        const { github_user, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_user });

        if(!dev) {

            // Busca informações do Dev na API do GitHub
            const responseGitHUB = await axios.get(`http://api.github.com/users/${github_user}`);
            const { name = login, avatar_url, bio } = responseGitHUB.data;
        
            // Converte as tecnologias recebidas, no formato String, para um Array
            const techsArray = parseStringAsArray(techs);
        
            // Monta a propriedade de localização conforme propriedades recebidas (Latitude, Longitude)
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }

            // Cria um registro no Banco
            dev = await Dev.create({
                github_user,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });

        }
                
        return response.json(dev);

    }

};