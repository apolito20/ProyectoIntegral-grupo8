module.exports = function(sequelize, DataTypes){
    let alias = "categorias";
    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.STRING
        }
    }
    let config = {
        tableName: "categorias",
        timestamps: false
    }
    let categorias = sequelize.define(alias,cols, config);
    return categorias
}