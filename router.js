const customer = require('./controllers/customer');
const vehicles = require('./controllers/vehicle');

const routes = {
    '/customers': {
        'GET': 'Cadastro do cliente',
        'POST': 'Listagem dos clientes',
        'PATCH': 'Editar clientes',
        'DELETE': 'Deletar clientes',
    },
    '/vehicles': {
    },
}

function router (url, method) {
    // a url representa qual controller a gente precisa
    // o method representa qual function do 

    if (!routes[url]) {
        throw "404"; // gerando
    }
    if (!routes[url][method]) {
        throw "405";
    }

    return routes[url][method] ();
}

module.exports = router;