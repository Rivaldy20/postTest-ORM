'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  books.init({
    isbn: DataTypes.STRING,
    judul: DataTypes.STRING,
    sinopsis: DataTypes.TEXT,
    penulis: DataTypes.STRING,
    genre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'books',
  });
  return books;
};