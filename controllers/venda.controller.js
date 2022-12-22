import vendaService from "../services/venda.svc.js";

async function createVenda(req, res, next) {
  try {
      let venda = req.body;

      if(!venda.livroId || !venda.clienteId) {
          throw new Error("livroId e clienteId são obrigatórios");
      }
      venda = await vendaService.createVenda(venda);
      res.send(venda);
  } catch(error) {
      next(error);
  }
}

async function getVenda(req, res, next) {
  try {
      const id =  req.params.id;
      res.send(await vendaService.getVenda(id));
  } catch (error) {
      next(error)
  }
}

async function getVendas(req, res, next) {
  try {
      const autorId = req.query.autorId;
      const livroId = req.query.livroId;
      const clienteId = req.query.clienteId;
      res.send(await vendaService.getVendas(autorId, livroId, clienteId));
  } catch(error) {
      next(error);
  }
}

export default {
  createVenda,
  getVenda,
  getVendas
}
