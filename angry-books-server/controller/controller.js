const fs = require("fs");
const {
  getTodosLivros,
  getLivrosId,
  insereLivro,
  modificaLivro,
  deletaLivro,
} = require("../services/services");

const getLivros = (req, res) => {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getLivroPorId = (req, res) => {
  try {
    const { id } = req.params;
    const livro = getLivrosId();
    const livroEncontrado = livro.find((livro) => livro.id == id);
    res.send(livroEncontrado);
  } catch (error) {
    console.log(error);
  }
};

const postLivro = (req, res) => {
  try {
    const livroNovo = req.body;
    if (livroNovo !== null) {
      insereLivro(livroNovo);
      res.status(201);
      res.send("Livro inserido com sucesso!");
    } else {
      res.status(400);
      res.send("Erro: Livro não pode ser null.");
    }
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send("Erro interno no servidor.");
  }
};

const patchLivro = (req, res) => {
  try {
    modificaLivro(req.body, req.params.id);

    res.status(200);
    res.send("Livro alterado com sucesso!");
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
};

const deleteLivro = (req, res) => {
  try {
    deletaLivro(req.body, req.params.id);
    res.status(200);
    res.send("Livro deletado com sucesso!");
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
};

module.exports = {
  getLivros,
  getLivroPorId,
  postLivro,
  patchLivro,
  deleteLivro,
};
