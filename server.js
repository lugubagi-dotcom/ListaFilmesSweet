import express from 'express';
import 'dotenv/config';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './src/lib/auth.js'; 

const app = express();
const PORT = process.env.PORT || 3001;

// --- MIDDLEWARES ---
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

// --- ROTAS BÁSICAS ---
app.get('/', (req, res) => {
  res.send('Servidor Back-end de Filmes Rodando!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// --- ROTA DO BETTER AUTH ---
app.use('/api/auth', toNodeHandler(auth));

// --- LIGANDO O MOTOR ---
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Auth disponível em http://localhost:${PORT}/api/auth`);
});