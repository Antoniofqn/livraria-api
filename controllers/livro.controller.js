import Livro from "../models/livro.model.js";
import LivroService from "../services/livro.svc.js";

async function createLivro(req, res, next) {
  try {
      let livro = req.body;

      if(!livro.nome || !livro.valor || !livro.autorId) {
          throw new Error("nome, email e autorId são obrigatórios");
      }
      livro = await LivroService.createLivro(livro);
      res.send(livro);
  } catch(error) {
      next(error);
  }
}

async function getLivros(req, res, next) {
  try {
      const autorId = req.query.autorId;
      res.send(await LivroService.getLivros(autorId));
  } catch(error) {
      next(error);
  }
}

async function getLivro(req, res, next) {
  try {
      const id =  req.params.id;
      res.send(await LivroService.getLivro(id));
  } catch (error) {
      next(error)
  }
}

async function updateLivro(req, res, next) {
  try {
      let livro = req.body;

      if(livro.nome || !livro.valor || !livro.livroId || livro.autorId) {
          throw new Error("Apenas o valor pode ser alterado. Valor e livroId são obrigatórios");
      }
      livro = await LivroService.updateLivro(livro);
      res.send(livro);
  } catch(error) {
      next(error);
  }
}

async function deleteLivro(req, res, next) {
  try {
      const id =  req.params.id;
      await LivroService.deleteLivro(id);
      res.end();
  } catch (error) {
      next(error)
  }
}

async function createLivroInfo(req, res, next) {
  try {
      let livroInfo = req.body;

      if(!livroInfo.livroId || !livroInfo.descricao || !livroInfo.paginas || !livroInfo.editora || !livroInfo.avaliacoes) {
        throw new Error("livroId, descricao, paginas, editora e avaliações são obrigatorios");
    }

      await LivroService.createLivroInfo(livroInfo);
      res.end();
  } catch (error) {
      next(error)
  }
}

async function updateLivroInfo(req, res, next) {
  try {
      let livroInfo = req.body;

      if(!livroInfo.livroId) {
        throw new Error("livroId é obrigatório");
    }

      await LivroService.updateLivroInfo(livroInfo);
      res.end();
  } catch (error) {
      next(error)
  }
}

async function deleteLivroInfo(req, res, next) {
  try {
    res.send(await LivroService.deleteLivroInfo(req.params.id))
  } catch (error) {
    next(error)
  }
}

async function createAvaliacao(req, res, next) {
  try {
    const avaliacao = req.body.avaliacao
    if (!req.params.id|| !avaliacao) {
      throw new Error("id e Avaliação são obrigatorios")
    }
    await LivroService.createAvaliacao(avaliacao, req.params.id);
    res.end();
  } catch (error) {
    next(error)
  }
}

async function deleteAvaliacao(req, res, next) {
  try {
    await LivroService.deleteAvaliacao(req.params.id, req.params.index);
    res.end();
  } catch (error) {
    next(error)
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
  deleteAvaliacao
}
