
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
