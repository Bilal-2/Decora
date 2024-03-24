// // const express = require('express');
// // const cors = require('cors');
// // const upload = require('./Routes/3dModelUploadRoute');
// // const mongoose = require('mongoose');
// // const Grid = require('gridfs-stream');
// // const app = express();

// // const port = 5000;
// // const mongoDB = require('./db');
// // const uploadRouter = require('./Middleware/upload');
// // const singleProductRouter = require('./Routes/SingleProduct');
// // const arPage = require('./Routes/ARpageRoute');

// // let gfs;
// // mongoDB();
// // app.use(cors({
// //     origin: 'http://127.0.0.1:5173'
// // }));
// // const conn = mongoose.connection;

// // //--------------CORS-----------------//

// // // app.use((req, res, next) => {
// // //     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
// // //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// // //     next();
// // // });

// // //-------------------Routes-----------------------//

// // //-------app.use-------//
// // app.use('/upload', uploadRouter);
// // // Serve uploaded files at '/uploads' URL
// // app.use('/uploads', express.static('uploads'));
// // app.use('/api', singleProductRouter)
// // app.use('/api', arPage);
// // app.use('/file', upload);
// // //app.use('/file', express.static(path.join(__dirname, 'uploads')));



// // app.use(express.json());

// // app.use('/api', require('./Routes/ProductsData'));

// // conn.once("open", function () {
// //     gfs = Grid(conn.db, mongoose.mongo);
// //     gfs.collection('3dModels');
// // });

// // //-------app.get-------//
// // app.get('/', (req, res) => {
// //     res.send('Hello World!');
// // });




// // app.get('/file/:filename', async (req, res) => {
// //     try {
// //         const file = await gfs.files.findOne({ filename: req.params.filename });

// //         if (!file) {
// //             console.error('File not found:', req.params.filename);
// //             return res.status(404).send('File not found');
// //         }

// //         const readStream = gfs.createReadStream(file.filename);
// //         readStream.pipe(res);
        
// //         // Add a return statement to terminate the function
// //         return;
// //     } catch (error) {
// //         console.error('Error retrieving file:', error);
// //         res.status(500).send('Internal Server Error');
// //     }
// // });
// // //-------app.delete-------//
// // app.delete('/file/:filename', async (req, res) => {
// //     try {
// //         await gfs.files.deleteOne({ filename: req.params.filename });
// //         res.send('Success');
// //     } catch (error) {
// //         res.send('An error occurred');
// //     }
// // });
// // //-------app.listen-------//
// // app.listen(port, () => {
// //     console.log(`Example app listening on port ${port}`);
// // });



// const express = require('express');
// const cors = require('cors');
// const upload = require('./Routes/3dModelUploadRoute');
// const mongoose = require('mongoose');
// const Grid = require('gridfs-stream');
// const app = express();

// const port = 5000;
// const mongoDB = require('./db');
// const uploadRouter = require('./Middleware/upload');
// const singleProductRouter = require('./Routes/SingleProduct');
// const arPage = require('./Routes/ARpageRoute');
// const createuser = require('./Routes/CreateUser');

// let gfs;
// mongoDB();

// // Use cors middleware with specific origin
// app.use(cors({
//     origin: 'http://localhost:5173'
// }));

// const conn = mongoose.connection;

// //-------------------Routes-----------------------//

// //-------app.use-------//
// app.use('/upload', uploadRouter);
// app.use('/api', require('./Routes/CreateUser'));
// // Serve uploaded files at '/uploads' URL
// app.use('/uploads', express.static('uploads'));
// app.use('/Product_Images', express.static('Product_Images'));
// app.use('/api', singleProductRouter)
// app.use('/api', arPage);
// app.use('/file', upload);
// //app.use('/file', express.static(path.join(__dirname, 'uploads')));

// app.use(express.json());

// app.use('/api', require('./Routes/ProductsData'));

// conn.once("open", function () {
//     gfs = Grid(conn.db, mongoose.mongo);
//     gfs.collection('3dModels');
// });

// //-------app.get-------//
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/file/:filename', async (req, res) => {
//     try {
//         const file = await gfs.files.findOne({ filename: req.params.filename });

//         if (!file) {
//             console.error('File not found:', req.params.filename);
//             return res.status(404).send('File not found');
//         }

//         const readStream = gfs.createReadStream(file.filename);
//         readStream.pipe(res);
        
//         // Add a return statement to terminate the function
//         return;
//     } catch (error) {
//         console.error('Error retrieving file:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// //-------app.delete-------//
// app.delete('/file/:filename', async (req, res) => {
//     try {
//         await gfs.files.deleteOne({ filename: req.params.filename });
//         res.send('Success');
//     } catch (error) {
//         res.send('An error occurred');
//     }
// });

// //-------app.listen-------//
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });




const express = require('express');
const cors = require('cors');
const upload = require('./Routes/3dModelUploadRoute');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const app = express();

const uploadRouter = require('./Middleware/upload');
const singleProductRouter = require('./Routes/SingleProduct');
const arPage = require('./Routes/ARpageRoute');
const createuser = require('./Routes/CreateUser');
const mongoDB = require('./db'); // Import mongoDB function

let gfs;

// MongoDB connection
mongoDB(); // Call the mongoDB function to establish the connection

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/upload', uploadRouter);
app.use('/api', createuser); // Assuming this is the route for user creation
app.use('/uploads', express.static('uploads'));
app.use('/Product_Images', express.static('Product_Images'));
app.use('/api', singleProductRouter);
app.use('/api', arPage);
app.use('/file', upload);

// Route to retrieve file
app.get('/file/:filename', async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });

        if (!file) {
            console.error('File not found:', req.params.filename);
            return res.status(404).send('File not found');
        }

        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        console.error('Error retrieving file:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to delete file
app.delete('/file/:filename', async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send('Success');
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Port configuration for Vercel
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
