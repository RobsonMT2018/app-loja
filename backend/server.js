// server.js

// 1. Importar as bibliotecas que instalamos
const express = require('express');
const cors = require('cors');

// 2. Criar a aplicação Express
const app = express();

// 3. Definir a porta do servidor
const port = 5000;

// Dados fixos do administrador
const ADMIN_EMAIL = 'seuemail@dominio.com';
const ADMIN_SENHA = 'suaSenhaSegura'; // Use uma senha forte de verdade aqui!

// Rota de login
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  // 1. Verificação das credenciais
  if (email === ADMIN_EMAIL && senha === ADMIN_SENHA) {
    // 2. Se as credenciais estiverem corretas, envia uma resposta de sucesso
    res.status(200).json({ mensagem: 'Login bem-sucedido!' });
  } else {
    // 3. Se as credenciais estiverem erradas, envia uma mensagem de erro
    res.status(401).json({ mensagem: 'Credenciais inválidas.' });
  }
});




// 4. Configurar os middlewares
// O 'express.json()' permite que o servidor entenda JSON (dados do formulário)
app.use(express.json());
// O 'cors()' permite que o front-end acesse o back-end
app.use(cors());

// 5. Rota de teste
// Essa é uma rota simples para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

// 6. Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});