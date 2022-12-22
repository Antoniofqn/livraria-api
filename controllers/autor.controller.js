import AutorService from "../services/autor.svc.js";

async function createAutor(req, res, next) {
  try {
      let autor = req.body;

      if(!autor.nome || !autor.email || !autor.telefone) {
          throw new Error("nome, email e telefone são obrigatórios");
      }
      autor = await AutorService.createAutor(autor);
      res.send(autor);
  } catch(error) {
      next(error);
  }
}

async function getAutors(req, res, next) {
  try {
      res.send(await AutorService.getAutors());
  } catch(error) {
      next(error);
  }
}

async function getAutor(req, res, next) {
  try {
      const id =  req.params.id;
      res.send(await AutorService.getAutor(id));
  } catch (error) {
      next(error)
  }
}

async function updateAutor(req, res, next) {
  try {
      let autor = req.body;

      if(!autor.nome || !autor.email || !autor.telefone || !autor.autorId) {
          throw new Error("id, nome, email e telefone são obrigatórios");
      }
      autor = await AutorService.updateAutor(autor);
      res.send(autor);
  } catch(error) {
      next(error);
  }
}

async function deleteAutor(req, res, next) {
  try {
      const id =  req.params.id;
      await AutorService.deleteAutor(id);
      res.end();
  } catch (error) {
      next(error)
  }
}

export default {
  createAutor,
  getAutors,
  getAutor,
  updateAutor,
  deleteAutor
}
