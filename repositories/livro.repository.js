import Livro from "../models/livro.model.js"
import { getMongoClient } from "./mongo.db.js";

async function insertLivro(livro) {
  try {
      return await Livro.create(livro);
  } catch (error) {
      throw error;
  }
}

async function getLivros() {
  try {
      return await Livro.findAll({
          order: [
              ['livroId','ASC']
          ]
      });
  } catch (error) {
      throw error;
  }
}

async function getLivro(id) {
  try {
      return await Livro.findByPk(id, { raw: true });
  } catch (error) {
      throw error;
  }
}

async function updateLivro(livro) {
  try {
      await Livro.update(livro, {
          where: {
              livroId: livro.livroId
          }
      });
      return await getLivro(livro.livroId);
  } catch (error) {
      throw error;
  }
}

async function deleteLivro(id) {
  try {
      await Livro.destroy({
          where: {
              livroId: id
          }
      });
  } catch (error) {
      throw error;
  }
}

async function getLivrosbyAutorId(autorId) {
  try {
      return await Livro.findAll({
          where: {
              autorId: autorId
          }
      });
  } catch (error) {
      throw error;
  }
}

async function createLivroInfo(livroInfo) {
  const client = getMongoClient();
  try {
      await client.connect();
      await client.db("livraria").collection("livroInfo").insertOne(livroInfo);
  } catch(error) {
      throw error;
  } finally {
      await client.close();
  }
}

async function getLivroInfo(livroId) {
  const client = getMongoClient();

  try {
      await client.connect();
      return await client.db("livraria").collection("livroInfo").findOne({livroId});
  } catch(error) {
      throw error;
  } finally {
      await client.close();
  }
}

async function updateLivroInfo(livroInfo) {
  const client = getMongoClient();

  try {
    await client.connect();
    await client.db("livraria").collection("livroInfo").updateOne(
      {livroId: livroInfo.livroId},
      {$set: {...livroInfo}}
    );
  } catch(error) {
      throw error;
  } finally {
      await client.close();
  }
}

async function deleteLivroInfo(livroId) {
  const client = getMongoClient();

  try {
      await client.connect();
      return await client.db("livraria").collection("livroInfo").deleteOne({livroId});
  } catch(error) {
      throw error;
  } finally {
      await client.close();
  }
}

async function createAvaliacao(avaliacao, livroId) {
  try {
    const livroInfo = await getLivroInfo(livroId);
    livroInfo.avaliacoes.push(avaliacao);
    await updateLivroInfo(livroInfo)
  } catch (error) {
    next(error)
  }
}

async function deleteAvaliacao(livroId, index) {
  try {
    const livroInfo = await getLivroInfo(livroId);
    livroInfo.avaliacoes.splice(index, 1)
    await updateLivroInfo(livroInfo)
  } catch (error) {
    next(error)
  }
}

export default {
  insertLivro,
  getLivros,
  getLivro,
  updateLivro,
  deleteLivro,
  getLivrosbyAutorId,
  createLivroInfo,
  getLivroInfo,
  updateLivroInfo,
  deleteLivroInfo,
  createAvaliacao,
  deleteAvaliacao
}
