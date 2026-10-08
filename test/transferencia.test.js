const request = require('supertest');
const { expect } =  require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao');

describe('Transferências', () =>{
    describe('POST /transferencia', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$10', async () =>{
            const token = await obterToken('julio.lima', '123456');
            const response = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send({
                contaOrigem: 1,
                contaDestino: 2,
                valor: 11,                       
                token: ""
            });
            
            expect(response.status).to.equal(201);

            console.log(response.body);
        })

        it('Deve retornar falhacom 422 quando o valor da transferencia for abaixo de R$10', async () =>{
            const token = await obterToken('julio.lima', '123456');
            const response = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .send({
                contaOrigem: 1,
                contaDestino: 2,
                valor: 9,                       
                token: ""
            });
            
            expect(response.status).to.equal(422);

            console.log(response.body);

        })
    })
})