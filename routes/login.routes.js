import express from 'express';

const login = express.Router();

login.get('/', (req, res) => res.send("Rota de Usuário"));

export default login;

