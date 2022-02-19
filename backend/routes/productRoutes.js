import express from "express";
import AsyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get(
  "/",
  AsyncHandler(async (req, res) => {
    //   res.send("API PRODUCTS");
    const products = await Product.find({});
    // res.status(401);
    // throw new Error("Not Authorize");
    res.json(products);
  })
);

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
router.get(
  "/:id",
  AsyncHandler(async (req, res, next) => {
    //   const product = products.find((p) => p._id === req.params.id);
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
      // res.status(404).json({ message: "Product not found" });
    }

    // try {
    //   if (!product) {
    //     res.json("Product not found!");
    //   }
    //   res.json(product);
    // } catch (error) {
    //   next(error);
    // }
  })
);

export default router;
