const fs = require("fs");

const getTodosLivros = () => {
  return JSON.parse(fs.readFileSync("./livros.json"));
};

const getLivrosId = () => {
  return getTodosLivros();
};

const insereLivro = (livro) => {
  let json = fs.readFileSync("./livros.json");
  const livros = JSON.parse(json);

  if (livro !== null) {
    livros.push(livro);

    json = JSON.stringify(livros);
    fs.writeFileSync("./livros.json", json);
  } else {
    throw new Error("Erro: Livro não pode ser null.");
  }
};

const modificaLivro = (modificacoes, id) => {
  const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));

  const indiceModificado = livrosAtuais.findIndex(
    (livro) => livro.id.toString() === id
  );
  livrosAtuais[indiceModificado] = {
    ...livrosAtuais[indiceModificado],
    ...modificacoes,
  };

  fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
};

function deletaLivroPorId(id) {
  try {
    const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));

    const idDeletado = livrosAtuais.findIndex(
      (livro) => livro.id.toString() === id
    );

    if (idDeletado !== -1) {
      livrosAtuais.splice(idDeletado, 1);
      fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
      return idDeletado;
    } else {
      return -1;
    }
  } catch (error) {
    throw error;
  }
}


module.exports = {
  getTodosLivros,
  getLivrosId,
  insereLivro,
  modificaLivro,
  deletaLivroPorId,
};
