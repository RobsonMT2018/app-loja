# App Loja

Aplicativo para gerenciar a loja de copos personalizados, com área de administração e vitrine para clientes.

## Funcionalidades

* **Área de Administração**
  * Login com e-mail e senha.
  * Dashboard de produtos cadastrados.
  * Adicionar produto: nome, valor, descrição e imagem.
  * Editar e remover produtos.

* **Área do Cliente**
  * Página inicial com vitrine de produtos.
  * Detalhes do produto com descrição completa e preço.
  * Navegação sem necessidade de login.

## Tecnologias utilizadas

* React: interface do usuário.
* Node.js + Express: servidor/backend.
* Json Server (ou banco de dados similar): armazenamento dos produtos.

## Pré-requisitos

* Node.js instalado.
* npm ou yarn instalado.
* vite instalado.

## Estrutura do projeto

```
app-loja/
├── backend/
│   ├── db.json
│   ├── package.json
│   ├── server.js
│   └── routes/
│       └── produtos.js
├── front-end/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Passo a passo

1. Abra o terminal e vá para a pasta do projeto.
2. Instale as dependências do backend:

```bash
cd backend
npm install
```

3. Instale as dependências do frontend:

```bash
cd ../front-end
npm install
```

4. Inicie o backend:

```bash
cd ../backend
nodemon server.js  
```

5. Inicie o frontend:

```bash
cd ../front-end
npm run dev
```

6. Se estiver usando json-server para dados locais:

```bash
npm install -g json-server
json-server --watch db.json --port 3001
```

## Observações

* Dependências adicionais que podem ser usadas:
  * `react-router-dom` para rotas no frontend.
  * `mongoose` se usar MongoDB.
  * `jsonwebtoken` para autenticação.
  * `firebase` se conectar com Firebase.
  * `vite` para execução do front-end.

* Ajuste os comandos de acordo com a estrutura real das pastas do seu projeto.

## Capturas de tela

* **Login**
<img width="1087" height="1088" alt="Login" src="https://github.com/user-attachments/assets/3e954bff-6193-48f4-8388-c44fb2d7fd95" />

* **Dashboard do Administrador**
<img width="1291" height="1439" alt="Dashboard" src="https://github.com/user-attachments/assets/c4c9d9f9-a483-49bb-b8b2-b30b32a37d63" />

* **Cadastrar Produtos**
<img width="1291" height="1237" alt="Cadastrar Produtos" src="https://github.com/user-attachments/assets/cd8f304d-f13c-4d36-ac26-45813f25599f" />

* **Editar Produtos**
<img width="1281" height="1439" alt="Editar Produtos" src="https://github.com/user-attachments/assets/c8b1051a-dbd8-440f-bd21-a76e4ee3e460" />









