const express = require("express");
const router = express.Router();
const {
  createProduct,
  productList,
  productSolo,
  productUpdate,
  productDelete,
  productCount,
  productFeature,
  productGallery,
} = require("../controller/products");

//  Multer
const multer = require("multer");

const FILE_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const isValid = FILE_TYPE_MAP[file.mimetype];
    let uploadError = new Error("invalid image type");

    if (isValid) {
      uploadError = null;
    }
    cb(uploadError, "public/uploads");
  },
  filename: function (req, file, cb) {
    const fileName = file.originalname.split(" ").join("-");
    const extension = FILE_TYPE_MAP[file.mimetype];
    cb(null, `${fileName}-${Date.now()}.${extension}`);
  },
});

const uploadOptions = multer({ storage: storage });

router.get(`/products`, productList);
router.get(`product/:id`, productSolo);
router.post(`/product`, uploadOptions.single("image"), createProduct);
router.put("product/:id", uploadOptions.single("image"), productUpdate);
router.delete("product/:id", productDelete);
router.get(`product/get/count`, productCount);
router.get(`product/get/featured/:count`, productFeature);
router.put(
  "/gallery-images/:id",
  uploadOptions.array("images", 10),
  productGallery
);

module.exports = router;
