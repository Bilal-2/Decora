const express = require('express')
const app = express()
const port = 5000
//const mongoDB = require("./db")
mongoDB();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/LoginUser"));
app.use('/api', require("./Routes/DisplayData"));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})