const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://bilalsubhani1111:admin123@cluster0.pixo4do.mongodb.net/Decora?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});
    console.log('Connected to MongoDB');
  
    const fetch_Products = mongoose.connection.db.collection('ProductsData');
    const Product_data = await fetch_Products.find({}).toArray();
    //console.log(data);
    global.Products_Data = Product_data;

    

   
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

module.exports = mongoDB;


// const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://bilalsubhani1111:admin123@cluster0.pixo4do.mongodb.net/Decora?retryWrites=true&w=majority';

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI);
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Failed to connect to MongoDB:', error);
//   }
// };

// const fetchProductsData = async () => {
//   try {
//     const ProductsData = mongoose.connection.db.collection('ProductsData');
//     const productData = await ProductsData.find({}).toArray();
//     return productData;
//   } catch (error) {
//     console.error('Error fetching product data:', error);
//     return [];
//   }
// };

// module.exports = {  fetchProductsData, mongoDB };
