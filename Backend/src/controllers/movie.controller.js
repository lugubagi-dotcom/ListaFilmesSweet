// src/controllers/plan.controller.js
import * as movieModel from "../models/movies.model.js";

// GET /api/movies
export async function listar(req, res) {
  const filmes = await MovieModel.listarFilmes  ();
  return res.json(filmes);
}

// GET /api/movies/:id
export async function buscar(req, res) {
  const id = req.params.id;
  const filme = await MovieModel.buscarFilmePorId(id);
  if (!filme) {
    return res.status(404).json({ error: "Filme não encontrado." });
  }
  return res.json(filme);
}

// POST /api/movies
export async function criar(req, res) {
  const { title, description, releaseDate } = req.body;

  if (!title || !description || !releaseDate) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const filme = await MovieModel.criarFilme({
    title,
    description,
    releaseDate,
  });
  return res.status(201).json(filme);
}

// PUT /api/movies/:id
export async function atualizar(req, res) {
  const id = req.params.id;
  const { title, description, releaseDate } = req.body;

  const filme = await MovieModel.buscarFilmePorId(id);
  if (!filme) {
    return res.status(404).json({ error: "Filme não encontrado." });
  }

  const atualizado = await MovieModel.atualizarFilme(id, {
    title,
    description,
    releaseDate,
  });
  return res.json(atualizado);
}

// DELETE /api/movies/:id
export async function deletar(req, res) {
  const id = req.params.id;

  const filme = await MovieModel.buscarFilmePorId(id);
  if (!filme) {
    return res.status(404).json({ error: "Filme não encontrado." });
  }

  await MovieModel.deletarFilme(id);
  return res.status(204).send();
}
