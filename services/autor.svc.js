import AutorRepository from "../repositories/autor.repository.js";
import livroRepository from "../repositories/livro.repository.js"

async function createAutor(autor) {
  return await AutorRepository.insertAutor(autor);
}


async function getAutors() {
  return await AutorRepository.getAutors();
}

async function getAutor(id) {
  return await AutorRepository.getAutor(id);
}

async function updateAutor(autor) {
  return await AutorRepository.updateAutor(autor);
}

async function deleteAutor(id) {
  const livrosAutor = await livroRepository.getLivrosbyAutorId(id)
  if (livrosAutor.length > 0) { throw new Error("Não se pode deletar um autor com livros associados")}

  await AutorRepository.deleteAutor(id);
}

export default {
  createAutor,
  getAutors,
  getAutor,
  updateAutor,
  deleteAutor
}
