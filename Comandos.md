# Comandos do projeto.

- npm init -y.
Inicia Node
- npm i express mongodb body-parser.
Instala as dependencias do express, mongo, body-parser.
- npm i nodemon typescript -D.
Instala nodemon para rodar e atualizar em tempo real, e typescript
- npx tsc --init.
Inicia tsconfig.
- npm i @types/express -D.
instala tipagem do express.
- npm i dotenv -D
instala dotenv para usar variavel de ambiente
- npm i ts-node-dev -D
instalando compilador de codigo ts
- npx ts-node-dev --respawn --transpileOnly --ignore-watch node_modules src/api/index.ts
transpileOnly força a compilação mesmo si tiver erro na aplicação
ignore-watch Ignora dependencias nodu_modules
tem 3 funcionalidades
 - Converte arquivo ts em js.
 - Roda a aplicação ts no node.
 - Roda e atualiza em tempo real.

Como fazer tipagem em typescript
```javascript
    interface Resp {
        data: Object,
    }
```