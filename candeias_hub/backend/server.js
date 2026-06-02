const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// 1. CONEXÃO COM O BANCO DE DADOS (Cria o arquivo database.sqlite automaticamente)
const dbPath = path.resolve(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar ao SQLite:', err.message);
    } else {
        console.log('Conectado ao Banco de Dados SQLite com sucesso!');
    }
});

// 2. CRIAÇÃO DA TABELA (Estrutura obrigatória do banco)
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS negocios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            tipo TEXT NOT NULL,
            descricao TEXT NOT NULL,
            data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) console.error('Erro ao criar tabela:', err.message);
    });
});

// 3. ROTA GET - Buscar todos os registros do banco de dados
app.get('/api/negocios', (req, res) => {
    const query = `SELECT * FROM negocios ORDER BY id DESC`;
    
    db.all(query, [], (err, rows) => {
        if (err) {
            res.status(500).json({ erro: err.message });
            return;
        }
        res.json(rows); // Retorna os dados reais salvos no arquivo
    });
});

// 4. ROTA POST - Inserir um novo negócio/evento no banco de dados
app.post('/api/negocios', (req, res) => {
    const { nome, tipo, descricao } = req.body;

    if (!nome || !tipo || !descricao) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios." });
    }

    const query = `INSERT INTO negocios (nome, tipo, descricao) VALUES (?, ?, ?)`;
    
    db.run(query, [nome, tipo, descricao], function(err) {
        if (err) {
            res.status(500).json({ erro: err.message });
            return;
        }
        // Retorna o item recém-criado junto com o ID gerado pelo banco
        res.status(201).json({ id: this.lastID, nome, tipo, descricao });
    });
});

// Iniciar o Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});