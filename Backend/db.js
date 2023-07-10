const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://bilalsubhani1111:hello1234@cluster0.pixo4do.mongodb.net/?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  
    

    

   
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

module.exports = mongoDB;
