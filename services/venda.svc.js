import vendaRepository from "../repositories/venda.repository.js";
import livroService from "../services/livro.svc.js"

async function createVenda(venda) {
  if (await livroService.checarEstoque(venda.livroId)) {
    venda.data = Date.now()
    return await vendaRepository.insertVenda(venda);
  } else {
    throw new Error("Estoque zerado")
  }
}

async function getVenda(id) {
  return await vendaRepository.getVenda(id);
}

async function getVendas(autorId, livroId, clienteId) {
  if(autorId) {
    return await vendaRepository.getVendasbyAutorId(autorId);
  }
  if(livroId) {
    return await vendaRepository.getVendasbyLivroId(livroId);
  }
  if(clienteId) {
    return await vendaRepository.getVendasbyClienteId(clienteId);
  }
    return await vendaRepository.getVendas();
}

export default {
  createVenda,
  getVenda,
  getVendas
}
