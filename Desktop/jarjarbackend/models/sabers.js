'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sabers extends Model {
   
    static associate(models) {
    
    }
  };
  Sabers.init({
    url: DataTypes.STRING,
    name:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sabers',
  });
  return Sabers;
};