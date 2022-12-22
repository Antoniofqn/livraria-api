import livroRepository from "../repositories/livro.repository.js";
import LivroRepository from "../repositories/livro.repository.js";
import vendaRepository from "../repositories/venda.repository.js"

async function createLivro(livro) {
  return await LivroRepository.insertLivro(livro);
}

async function getLivros(autorId) {
  if(autorId) {
    return await LivroRepository.getLivrosbyAutorId(autorId);
}
  return await LivroRepository.getLivros();
}

async function getLivro(id) {
  const livro = await LivroRepository.getLivro(id);
  livro.info = await LivroRepository.getLivroInfo(parseInt(id));
  return livro
}

async function updateLivro(livro) {
  return await LivroRepository.updateLivro(livro);
}

async function deleteLivro(id) {
  const vendasLivro = await vendaRepository.getVendasbyLivroId(id)
  if (vendasLivro.length > 0) { throw new Error("Não se pode deletar um livro com vendas associadas")}
  await LivroRepository.deleteLivro(id);
}

async function createLivroInfo(livroInfo) {
  await LivroRepository.createLivroInfo(livroInfo);
}

async function updateLivroInfo(livroInfo) {
  await LivroRepository.updateLivroInfo(livroInfo)
}

async function deleteLivroInfo(livroId) {
  await LivroRepository.deleteLivroInfo(parseInt(livroId))
}

async function createAvaliacao(avaliacao, livroId) {
  await livroRepository.createAvaliacao(avaliacao, parseInt(livroId))
}

async function deleteAvaliacao(livroId, index) {
  await livroRepository.deleteAvaliacao(parseInt(livroId), index)
}

async function checarEstoque(livroId) {
  const livro = await LivroRepository.getLivro(livroId)
  if (livro.estoque > 0) {
    livro.estoque -= 1
    await LivroRepository.updateLivro(livro)
    return true
  } else {
    return false
  }
}

export default {
  createLivro,
  getLivros,
  getLivro,
  updateLivro,
  deleteLivro,
  createLivroInfo,
  updateLivroInfo,
  deleteLivroInfo,
  createAvaliacao,
  deleteAvaliacao,
  checarEstoque
}
