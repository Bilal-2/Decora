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

// let gfs;
// mongoDB();
// app.use(cors({
//     origin: 'http://127.0.0.1:5173'
// }));
// const conn = mongoose.connection;

// //--------------CORS-----------------//

// // app.use((req, res, next) => {
// //     res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
// //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// //     next();
// // });

// //-------------------Routes-----------------------//

// //-------app.use-------//
// app.use('/upload', uploadRouter);
// // Serve uploaded files at '/uploads' URL
// app.use('/uploads', express.static('uploads'));
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
//const cors = require('cors');
const upload = require('./Routes/3dModelUploadRoute');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const app = express();

const port =process.env.PORT || 5000;
const mongoDB = require('./db');
const uploadRouter = require('./Middleware/upload');
const singleProductRouter = require('./Routes/SingleProduct');
const arPage = require('./Routes/ARpageRoute');
//const createuser = require('./Routes/CreateUser');
//const allowCors = require('./Middleware/cors');

let gfs;
mongoDB();


// Apply CORS middleware to all routes
//app.use(allowCors);

// Use cors middleware with specific origin
// Use cors middleware with specific origin
// app.use(cors({
//     origin: 'http://localhost:5173'
// }));

const conn = mongoose.connection;

//-------------------Routes-----------------------//

//-------app.use-------//
app.use('/upload', uploadRouter);
app.use('/api', require('./Routes/CreateUser'));
// Serve uploaded files at '/uploads' URL
app.use('/uploads', express.static('uploads'));
app.use('/Product_Images', express.static('Product_Images'));
app.use('/api', singleProductRouter)
app.use('/api', arPage);
app.use('/file', upload);
//app.use('/file', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());

app.use('/api', require('./Routes/ProductsData'));

conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('3dModels');
});

//-------app.get-------//
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/file/:filename', async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });

        if (!file) {
            console.error('File not found:', req.params.filename);
            return res.status(404).send('File not found');
        }

        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
        
        // Add a return statement to terminate the function
        return;
    } catch (error) {
        console.error('Error retrieving file:', error);
        res.status(500).send('Internal Server Error');
    }
});

//-------app.delete-------//
app.delete('/file/:filename', async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send('Success');
    } catch (error) {
        res.send('An error occurred');
    }
});

//-------app.listen-------//
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
