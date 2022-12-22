import ClienteService from "../services/cliente.svc.js";

async function createCliente(req, res, next) {
  try {
      let cliente = req.body;

      if(!cliente.nome || !cliente.email || !cliente.senha || !cliente.telefone || !cliente.endereco ) {
          throw new Error("nome, email, senha, telefone e endereço são obrigatórios");
      }
      cliente = await ClienteService.createCliente(cliente);
      res.send(cliente);
  } catch(error) {
      next(error);
  }
}

async function getClientes(req, res, next) {
  try {
      res.send(await ClienteService.getClientes());
  } catch(error) {
      next(error);
  }
}

async function getCliente(req, res, next) {
  try {
      const id =  req.params.id;
      res.send(await ClienteService.getCliente(id));
  } catch (error) {
      next(error)
  }
}

async function updateCliente(req, res, next) {
  try {
      let cliente = req.body;

      if(!cliente.nome || !cliente.email || !cliente.senha || !cliente.telefone || !cliente.endereco || !cliente.clienteId) {
          throw new Error("id, nome, email, senha, telefone e endereço são obrigatórios");
      }
      cliente = await ClienteService.updateCliente(cliente);
      res.send(cliente);
  } catch(error) {
      next(error);
  }
}

async function deleteCliente(req, res, next) {
  try {
      const id =  req.params.id;
      await ClienteService.deleteCliente(id);
      res.end();
  } catch (error) {
      next(error)
  }
}

export default {
  createCliente,
  getClientes,
  getCliente,
  updateCliente,
  deleteCliente
}
