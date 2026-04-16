const express = require('express');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();
const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  res.send('Servidor Back-end de Filmes Rodando!');
});

app.post('/api/register', async (req, res) => {
  console.log('Body recebido:', req.body);
  
  const { username, email, password, full_name } = req.body || {};

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Campos obrigatórios faltando" });
  }

  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
        full_name
      }
    });

    res.status(201).json({
      message: "Usuário criado!",
      id: user.id.toString()
    });

  } catch (error) {
    console.error('Erro:', error);
    res.status(400).json({
      error: "Erro ao cadastrar. Email ou usuário já existem."
    });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (user && user.password === password) {
      res.json({
        message: "Login realizado!",
        userId: user.id.toString()
      });
    } else {
      res.status(401).json({
        error: "E-mail ou senha incorretos."
      });
    }

  } catch (error) {
    res.status(500).json({
      error: "Erro no servidor"
    });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});