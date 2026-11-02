
'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Komik extends Model {
    static associate(models) {
      // definisikan relasi di sini jika ada
    }
  }

  Komik.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Komik',
    tableName: 'komik',
  });

  return Komik;
};