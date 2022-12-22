import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Cliente from "./cliente.model.js";
import Livro from "./livro.model.js"
import Autor from "./autor.model.js"

const Venda = db.define('vendas', {
    vendaId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    }
}, {underscored: true});

Venda.belongsTo(Livro, {foreignKey: "livroId"});
Venda.belongsTo(Cliente, {foreignKey: "clienteId"});

await Venda.sync()

export default Venda;
