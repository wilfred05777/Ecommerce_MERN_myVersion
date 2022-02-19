// const dotenv = require("dotenv");
// const products = require("../data/products.js");
// const Product = require("../models/productModel.js");
// const connectDB = require("./db.js");
// const Users = require("../data/users.js");

import dotenv from "dotenv";
import products from "../data/products.js";
import Product from "../models/productModel.js";
import connectDB from "./db.js";
import Users from "../data/users.js";
import mongoose from "mongoose";
import colors from "colors";

dotenv.config();
connectDB();

const importUsers = async () => {
  try {
    await Users.deleteMany();
    await Users.insertMany(Users);

    console.log("Users Data Imported!");
    // process.exit();
  } catch (error) {
    console.log(error);
    // process.exit(1);
  }
};

const importProducts = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Data Imported");
    process.exit();
  } catch (err) {
    console.log(error);
    process.exit(1);
  }
};

const deleteProducts = async () => {
  try {
    await Product.deleteMany();

    console.log("Data destroyed");
    process.exit();
  } catch (err) {
    console.log(error);
    process.exit(1);
  }
};

export default importUsers;
// importUsers();
// importProducts();
// deleteProducts();
