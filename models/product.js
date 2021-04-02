import Sequelize from 'sequelize';
import db from '../config/db.js'

export const product = db.define('product',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true

    },
    name: Sequelize.STRING,
    url_image:Sequelize.STRING,
    price:Sequelize.FLOAT,
    discount:Sequelize.INTEGER,
    id_Categoria:{
        type:Sequelize.INTEGER,
        foreingKey
    

})