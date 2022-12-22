import ClienteRepository from "../repositories/cliente.repository.js";
import vendaRepository from "../repositories/venda.repository.js"

async function createCliente(cliente) {
  return await ClienteRepository.insertCliente(cliente);
}


async function getClientes() {
  return await ClienteRepository.getClientes();
}

async function getCliente(id) {
  return await ClienteRepository.getCliente(id);
}

async function updateCliente(cliente) {
  return await ClienteRepository.updateCliente(cliente);
}

async function deleteCliente(id) {
  const vendasCliente = await vendaRepository.getVendasbyClienteId(id)
  if (vendasCliente.length > 0) { throw new Error("Não se pode deletar um cliente com vendas associadas")}

  await ClienteRepository.deleteCliente(id);
}

export default {
  createCliente,
  getClientes,
  getCliente,
  updateCliente,
  deleteCliente
}
