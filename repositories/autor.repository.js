import Autor from "../models/autor.model.js"

async function insertAutor(autor) {
  try {
      return await Autor.create(autor);
  } catch (error) {
      throw error;
  }
}

async function getAutors() {
  try {
      return await Autor.findAll({
          order: [
              ['autorId','ASC']
          ]
      });
  } catch (error) {
      throw error;
  }
}

async function getAutor(id) {
  try {
      return await Autor.findByPk(id);
  } catch (error) {
      throw error;
  }
}

async function updateAutor(autor) {
  try {
      await Autor.update(autor, {
          where: {
              autorId: autor.autorId
          }
      });
      return await getAutor(autor.autorId);
  } catch (error) {
      throw error;
  }
}

async function deleteAutor(id) {
  try {
      await Autor.destroy({
          where: {
              autorId: id
          }
      });
  } catch (error) {
      throw error;
  }
}


export default {
  insertAutor,
  getAutors,
  getAutor,
  updateAutor,
  deleteAutor
}
