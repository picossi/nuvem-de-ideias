# Nuvem de Ideias
Projeto em Angular + Firebase para armazenar as ideias da Forlogic

## Quick Start

1. Para começar você vai precisar instalar o CLI do Angular
``` npm
$ npm install -g @angular/cli
```

2. Clone o projeto para sua máquina e navegue até a pasta do projeto
``` bash
$ git clone https://github.com/mumumilk/nuvem-de-ideias.git
$ cd nuvem-de-ideias
```

3. Instale as dependências necessárias para rodar o projeto. Contidos no arquivo `package.json`
``` npm
$ npm install
```

4. Adicione o arquivo `firebase.config.ts` dentro de /src/environments com suas configurações do firebase
``` javascript
export const FirebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  databaseURL: 'your-database-url',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-messaging-sender-id'
};
```

5. Rode o projeto localmente
``` npm
$ npm start
```
Utilize o parâmetro `--open` (ou só `-o`) para abrir automaticamente o navegador no `http://localhost:4200`

## Quer contribuir?
Encontrou um bug? Escreveu um código maneiro? Quer ajudar com a documentação? Ótimo! [Saiba como contribuir](https://github.com/mumumilk/nuvem-de-ideias/blob/master/CONTRIBUTING.md) ou [abra uma issue](https://github.com/mumumilk/nuvem-de-ideias/issues) e contribua para que o app fique cada vez melhor.
