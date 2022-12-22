import Venda from "../models/venda.model.js"
import Livro from "../models/livro.model.js";
import Autor from "../models/autor.model.js"

async function insertVenda(venda) {
  try {
      const livro = await Livro.findByPk(venda.livroId)
      venda.valor = livro.valor
      return await Venda.create(venda);
  } catch (error) {
      throw error;
  }
}

async function getVenda(id) {
  try {
      return await Venda.findByPk(id);
  } catch (error) {
      throw error;
  }
}

async function getVendas() {
  try {
    return await Venda.findAll({
        order: [
            ['vendaId','ASC']
        ]
    });
  } catch (error) {
      throw error;
  }
}

async function getVendasbyAutorId(autorId) {
  try {
    return await Venda.findAll({
      include: {model: Livro, required: true, where: { autorId: autorId}}
    })
  } catch (error) {
      throw error;
  }
}

async function getVendasbyLivroId(livroId) {
  try {
    return await Venda.findAll({
        where: {
            livroId: livroId
        }
    });
  } catch (error) {
      throw error;
  }
}

async function getVendasbyClienteId(clienteId) {
  try {
    return await Venda.findAll({
        where: {
            clienteId: clienteId
        }
    });
  } catch (error) {
      throw error;
  }
}

export default {
  insertVenda,
  getVenda,
  getVendas,
  getVendasbyAutorId,
  getVendasbyClienteId,
  getVendasbyLivroId
}
