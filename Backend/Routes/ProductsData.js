const express = require('express')
const router = express.Router()
// const { fetchProductsData } = require('../db'); // Adjust the path as needed

// // GET /api/products
// router.get('/ProductsData', async (req, res) => {
//   try {
//     const productData = await fetchProductsData();
//     res.json(productData);
//   } catch (error) {
//     console.error('Error fetching product data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });



router.post("/ProductsData",async (req, res) => {
       
        try {
            //console.log(global.Products_Data);
            res.send([global.Products_Data])
            
        } catch (error) {

            console.error(error.message);
            res.send("Server Error")

        }


    })

module.exports = router;