
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

// 1. CREATE (POST)
app.post('/api/komik', async (req, res) => {
  try {
    const { title, description, author } = req.body;
    const komikBaru = await Komik.create({ title, description, author });
    res.status(201).json({ message: 'Komik berhasil ditambahkan', data: komikBaru });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menambahkan komik', error: error.message });
  }
});

// 2. READ ALL (GET)
app.get('/api/komik', async (req, res) => {
  try {
    const daftarKomik = await Komik.findAll();
    res.status(200).json({ message: 'Berhasil mengambil data komik', data: daftarKomik });
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data komik', error: error.message });
  }
});
