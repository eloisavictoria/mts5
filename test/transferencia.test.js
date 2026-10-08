const request = require('supertest');
const { expect } =  require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json');

describe('Transferências', () =>{
    describe('POST /transferencia', () => {

        let token;

        beforeEach(async () =>{
            token = await obterToken('julio.lima', '123456');
        })
        it.only('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$10', async () =>{
            const bodyTransferencia = {...postTransferencias};

            const response = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(bodyTransferencia);
            
            expect(response.status).to.equal(201);

            console.log(response.body);
        })

        it('Deve retornar falhacom 422 quando o valor da transferencia for abaixo de R$10', async () =>{
            const bodyTransferencia = {...postTransferencias};
            bodyTransferencia.valor = 9;

            const response = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send(bodyTransferencia);
            expect(response.status).to.equal(422);
            console.log(response.body);

        })
    })
})