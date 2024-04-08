const express = require('express');
const router = express.Router();
const connectDB = require('../db'); 
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


router.get('/ARpage/:id', async (req, res) => {
  try {
    //await connectDB();
    const fetch_Products = mongoose.connection.db.collection('products');
    const projection = { _id: 0, '3D_model': 1 };
    const productId = req.params.id;
    const products = await fetch_Products.findOne({ _id: new ObjectId(productId) }, { _id: 0, '3D_model': 1 });

    

    // const product = products.toArray();
    // console.log(products);
    if (!products) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
