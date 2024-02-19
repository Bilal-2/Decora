const upload = require('../Middleware/3dModelUpload');
const express = require('express');
const router = express.Router();

router.post("/3dModelsUpload",upload.single("file"), async(req,res)=>{
    console.log('POST request to /3dModelsUpload received');
    if (req.file === undefined) return res.send("you must upload a file.");
    const modelurl = `http://localhost:5000/file/${req.file.filename}`;
    return res.send(modelurl);
})

module.exports = router;