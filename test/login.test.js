const request = require('supertest');
const { expect } =  require('chai');
require('dotenv').config();
const postLogin = require('../fixtures/postLogin.json');

describe('Login',() => {

    describe('POST /login', () => {
        it('Deve retornar 200 com um token em string quando usar credenciais válidas', async () => {
            const bodyLogin = {...postLogin};

            const resposta = await request(process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json') //setando cabeçalho da requisição
                .send(bodyLogin);

            // console.log(resposta.body);
            // console.log(resposta.status);

            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string');
        })
    })
})