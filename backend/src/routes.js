const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

/* EXEMPLO
routes.get('/teste', (request, response) => {
    //console.log(request.query);  
    //console.log(request.param);
    //console.log(request.body);
    return response.json({teste: 'Ola Mundo'});
});
*/

routes.get('/devs', DevController.index);

routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);


module.exports = routes;