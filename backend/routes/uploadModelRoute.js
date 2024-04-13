// import path from "path";
// import express from "express";
// import multer from "multer";

// const router = express.Router();
// //console.log("uploading yakki on server side");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "Models_upload/");
//   },

//   filename: (req, file, cb) => {
//     const extname = path.extname(file.originalname);
//     cb(null, `${file.fieldname}-${Date.now()}${extname}`);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const filetypes = /.*/;
//   const mimetype = file.mimetype;

//   if (filetypes.test(path.extname(file.originalname).toLowerCase()) && mimetype === 'model/gltf-binary') {
//     cb(null, true);
//   } else {
//     cb(new Error("GLTF or GLB files only"), false);
//   }
// };

// const upload = multer({ storage, fileFilter });
// const uploadSingleModel = upload.single("model");

// router.post("/", (req, res) => {
//   uploadSingleModel(req, res, (err) => {
//     if (err) {
//       res.status(400).send({ message: err.message });
//     } else if (req.file) {
//       res.status(200).send({
//         message: "Model uploaded successfully",
//         model: `/${req.file.path}`,
//       });
//     } else {
//       res.status(400).send({ message: "No model file provided" });
//     }
//   });
// });

// export default router;


import path from "path";
import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Models_upload/");
  },

  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${Date.now()}${extname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const filetypes = /.*/; // Regular expression to accept any file extension
  const mimetypes = /.*/; // Regular expression to accept any MIME type
  // const filetypes = /glb|gltf/; // Regular expression to accept .glb and .gltf file extensions
  // const mimetypes = /model\/glb|model\/gltf/; // Regular expression to accept MIME types starting with "model/" followed by .glb or .gltf
  

  const extname = path.extname(file.originalname).toLowerCase();
  const mimetype = file.mimetype;

  if (filetypes.test(extname) && mimetypes.test(mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Models only"), false);
  }
};

const upload = multer({ storage, fileFilter });
const uploadSingleModel = upload.single("model");

router.post("/", (req, res) => {
  uploadSingleModel(req, res, (err) => {
    if (err) {
      res.status(400).send({ message: err.message });
    } else if (req.file) {
      res.status(200).send({
        message: "Model uploaded successfully",
        model: `/${req.file.path}`,
      });
    } else {
      res.status(400).send({ message: "No Model file provided" });
    }
  });
});

export default router;


