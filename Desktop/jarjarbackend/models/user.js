'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
 
    static associate(models) {
      this.hasMany(models.Sabers, {
        foreignKey: 'userId'
      })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
    type: DataTypes.STRING,
    allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};