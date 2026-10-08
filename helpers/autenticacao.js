const request = require('supertest');
const obterToken = async (usuario, senha) =>{
    //Capturar o token de autenticação
    const respostaLogin = await request(process.env.BASE_URL)
    .post('/login')
    .set('Content-Type', 'application/json') //setando cabeçalho da requisição
    .send({
        'username': usuario,
        'senha': senha
    })
    const token = respostaLogin.body.token;
    return token;
}

module.exports = { obterToken }