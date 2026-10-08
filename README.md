# Testes automatizados da Banco API

Projeto de estudo desenvolvido para as aulas da **Mentoria de Testes de Software do Julio de Lima**. O objetivo é praticar testes automatizados de uma API REST com JavaScript, verificando os endpoints de login e transferência da [Banco API](https://github.com/juliodelimas/banco-api).

Repositório dos testes: [eloisavictoria/mts5](https://github.com/eloisavictoria/mts5).

## Tecnologias

Os testes são escritos em JavaScript (CommonJS) e utilizam:

- [Mocha](https://mochajs.org/) para organizar e executar os testes;
- [Supertest](https://github.com/ladjs/supertest) para enviar requisições HTTP à API;
- [Chai](https://www.chaijs.com/) para as asserções;
- [dotenv](https://github.com/motdotla/dotenv) para carregar configurações do arquivo `.env`;
- [Mochawesome](https://github.com/adamgruber/mochawesome) para gerar o relatório HTML.

As versões utilizadas estão declaradas em [`package.json`](./package.json).

## Estrutura do projeto

```text
.
├── fixtures/
│   ├── postLogin.json             # Dados usados nas requisições de login
│   └── postTransferencias.json    # Dados usados nas requisições de transferência
├── helpers/
│   └── autenticacao.js            # Obtém token de autenticação
├── test/
│   ├── login.test.js              # Testes do endpoint de login
│   └── transferencia.test.js      # Testes de transferências
├── .env                           # Configuração local (criada pelo usuário)
├── .gitignore
├── package.json
└── package-lock.json
```

O diretório `mochawesome-report/` é criado pelo Mochawesome quando os testes são executados. Ele contém o relatório HTML e não é versionado no Git.

## Pré-requisitos

- Node.js e npm instalados;
- A [Banco API](https://github.com/juliodelimas/banco-api) em execução e acessível pela máquina que executará os testes.

## Configuração

1. Clone este repositório e acesse a pasta do projeto.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo chamado `.env` na raiz do projeto, no mesmo nível de `package.json`, com a URL base da API:

   ```dotenv
   BASE_URL=http://localhost:3000
   ```

   Substitua `http://localhost:3000` pela URL e porta em que a Banco API estiver rodando. Informe somente a URL base, sem adicionar o caminho de um endpoint, como `/login`. O arquivo `.env` é local e está listado no `.gitignore`; cada pessoa deve criá-lo no próprio ambiente.

## Executar os testes

Para executar todos os testes:

```bash
npm test
```

O comando executa os arquivos `test/**/*.test.js`, com timeout de 200 segundos, e gera o relatório do Mochawesome.

## Consultar o relatório

Após a execução, abra o arquivo abaixo em um navegador:

```text
mochawesome-report/mochawesome.html
```

O relatório é atualizado nas execuções seguintes. A pasta gerada é ignorada pelo Git e pode ser recriada executando `npm test`.

## Documentação das dependências

- [Mocha](https://mochajs.org/)
- [Supertest](https://github.com/ladjs/supertest)
- [Chai](https://www.chaijs.com/)
- [dotenv](https://github.com/motdotla/dotenv)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
