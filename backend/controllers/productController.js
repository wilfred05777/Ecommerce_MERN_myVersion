import AsyncHandler from "express-async-handler";

import Product from "../models/productModel.js";

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = AsyncHandler(async (req, res) => {
  //   res.send("API PRODUCTS");
  const products = await Product.find({});
  // res.status(401);
  // throw new Error("Not Authorize");
  res.json(products);
});

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
const getProductById = AsyncHandler(async (req, res) => {
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
});

// @desc Delete a product
// @route DELETE /api/products/:id
// @access Private/Admin
const deleteProduct = AsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product Removed!" });
  } else {
    res.status(404);
    throw new Error("Product not found");
    // res.status(404).json({ message: "Product not found" });
  }
});

export { getProducts, getProductById, deleteProduct };
