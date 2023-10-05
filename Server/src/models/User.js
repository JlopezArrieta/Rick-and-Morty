const { DataTypes } = require('sequelize');

//CREACION DE MODELOS\\

module.exports = (sequelize) => {
   //1. nombre del modelo (User), 2. es el obj o los obj(id, email y demas).
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         allowNull:false,
         primaryKey:true,
         autoIncrement: true
      },
      email: {
         type: DataTypes.STRING,
         allowNull:false,
         isEmail:true
      },
      password: {
         type: DataTypes.STRING,
         allowNull:false
      }
   }, { timestamps: false });
};
