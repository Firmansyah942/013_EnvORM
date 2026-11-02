
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Inisialisasi Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
  }
);

// Definisi Model Komik
const Komik = sequelize.define('Komik', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'komik',
  timestamps: true,
});

// ==================== ROUTE CRUD ====================
