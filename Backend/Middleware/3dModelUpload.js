const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');

const storage = new GridFsStorage({
    url: 'mongodb+srv://bilalsubhani1111:admin123@cluster0.pixo4do.mongodb.net/Decora?retryWrites=true&w=majority',
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
        // const match = ["model/gltf+json"];

        const match = ["image/png"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "3dModels",
            filename: `${Date.now()}-any-name-${file.originalname}`
        };
    }
});

module.exports = multer({ storage });

