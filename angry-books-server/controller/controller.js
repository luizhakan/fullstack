const fs = require("fs");
const {
  getTodosLivros,
  getLivrosId,
  insereLivro,
  modificaLivro,
  deletaLivroPorId,
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

    if (id && Number(id)) {
      const livro = getLivrosId();
      const livroEncontrado = livro.find((livro) => livro.id == id);
      res.send(livroEncontrado);
    } else {
      res.status(422);
      res.send("Erro: ID inválido.");
    }
  } catch (error) {
    console.log(error);
  }
};

const postLivro = (req, res) => {
  try {
    const livroNovo = req.body;
    if (livroNovo !== null) {
      if (livroNovo.name) {
        insereLivro(livroNovo);
        res.status(201);
        res.send("Livro inserido com sucesso!");
      } else {
        res.send("O campo name é obrigatório!");
      }
      
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
    if (id && Number(id)) {
      modificaLivro(req.body, req.params.id);
      res.status(200);
      res.send("Livro alterado com sucesso!");
    } else {
      res.status(422);
      res.send("Erro: Esse livro não existe.");
    }
  } catch (error) {
    res.status(500);
    res.send({ error });
  }
};

function deleteLivro(req, res) {
  try {
    console.log(`Tentando deletar livro com ID: ${req.params.id}`);

    const idDeletado = deletaLivroPorId(req.params.id);

    if (idDeletado !== -1) {
      console.log(`Livro com ID ${idDeletado} foi deletado.`);
      res.send({ idDeletado });
    } else {
      console.log(`Nenhum livro encontrado com ID ${req.params.id}.`);
      res.status(404).send({ error: "Livro não encontrado." });
    }
  } catch (error) {
    console.error("Erro ao deletar livro:", error);
    res.status(500).send({ error });
  }
}

module.exports = {
  getLivros,
  getLivroPorId,
  postLivro,
  patchLivro,
  deleteLivro,
};
