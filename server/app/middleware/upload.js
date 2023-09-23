const multer = require("multer");

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-t2c-${file.originalname}`);
  },
});


const upload = multer({ storage: storage, fileFilter: imageFilter }).fields([
  { name: "profilePicture", maxCount: 1 },
  { name: "bioPic", maxCount: 1 },
]);


module.exports = upload;
