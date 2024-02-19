const express = require('express');
const router = express.Router();
const connectDB = require('../db'); 

router.get('/', async (req, res) => {
  try {
    const client = await connectDB();
    const database = client.db('Decora');
    const collection = database.collection('ProductsData');

    const products = await collection.find().toArray();

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
