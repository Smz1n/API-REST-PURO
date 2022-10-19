const http = require('http');
const router = require('./router');

//funcao que e executada a cada request
const eachRequest = (request, response) => {
    //Definindo o tipo de resposta para json
    response.setHeader('Content-Type', 'application/json');

    // let route = request.url;
    // let method = request.method;

    let {url, method} = request;

    let content = "";

    //definindo conteudo da resposta
    try {
        //definindo conteudo da resposta
        let content = JSON.stringify(
        router(url, method)
        );

    }catch (error) {
        //se der algum erro, executa esse daqui
        response.writeHead(error)

    }

    //definindo conteudo da resposta


    //respondendo pro httpClient
    response.end(content);
};

module.exports = http.createServer(eachRequest);