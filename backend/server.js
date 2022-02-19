// const express = require("express");  /// Common JS format node version should v14+
// const dotenv = require("dotenv");
// const products = require("./data/products");
// import products from "./data/products.js";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

/// ROUTES
app.get("/", (req, res) => {
  res.send("API is Running");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
