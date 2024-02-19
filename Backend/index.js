// const express = require('express')
// const upload = require('./Routes/3dModelUploadRoute');
// const mongose = require('mongoose');
// const Grid = require('gridfs-stream'); 
// const app = express();
// const port = 5000
// const mongoDB = require("./db");
// mongoDB();

// let gfs;

// const conn = mongose.mongoDB;
// conn.once("open", function(){
//     gfs = Grid(conn.db, mongose.mongoDB);
//     gfs.collection("models");
// })

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// })
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })
// app.use(express.json())
// app.use("./file", upload);
// //Routes
//  app.use('/api', require("./Routes/ProductsData"));
//  app.get('/file/:filename',async(req,res)=>{
//     try{
//             const file = await gfs.files.findOne({filename: req.params.filename});
//             const readStream = gfs.createReadStream(file.filename);
//             readStream.pipe(res)
//     }
//     catch(error){
//             res.send("not found");
//     }
//  })




 
// // app.use('/api', require("./Routes/LoginUser"));
// // app.use('/api', require("./Routes/DisplayData"));




// app.delete('/file/:filename',async(req,res)=>{
//     try{
//             await gfs.files.deleteOne({filename: req.params.filename});
//             res.send("Success");
//     }
//     catch(error){
//             res.send("An error Occured");
//     }
//  })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })


const express = require('express');
const upload = require('./Routes/3dModelUploadRoute');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const app = express();
const cors = require('cors');
const port = 5000;
const mongoDB = require('./db');
const uploadRouter = require('./Middleware/upload');

let gfs;
mongoDB();
app.use(cors());
const conn = mongoose.connection;



app.use('/upload', uploadRouter);

// Serve uploaded files at '/uploads' URL
app.use('/uploads', express.static('uploads'));



conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('3dModels');
});

app.use('/file', upload);
//app.use('/file', express.static(path.join(__dirname, 'uploads')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());

// Routes
app.use('/api', require('./Routes/ProductsData'));

// app.get('/file/:filename', async (req, res) => {
//     try {
//         const file = await gfs.files.findOne({ filename: req.params.filename });
//         const readStream = gfs.createReadStream(file.filename);
//         readStream.pipe(res);
//     } catch (error) {
//         res.send('Not found');
//         console.error('Error retrieving file:', error);
//         // Send a more descriptive error message to the client
//         res.status(500).send('Internal Server Error');
//     }
// });

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

app.delete('/file/:filename', async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send('Success');
    } catch (error) {
        res.send('An error occurred');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
