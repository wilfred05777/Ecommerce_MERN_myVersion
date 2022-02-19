import Seeder from "mongo-seeding";

import dotenv, { config } from "dotenv";
import products from "../data/products.js";
import Product from "../models/productModel.js";
import connectDB from "./db.js";
import Users from "../data/users.js";
import mongoose from "mongoose";
import colors from "colors";
dotenv.config();
connectDB();
const seeder = new Seeder(process.connectDB);

const importUsers = () => {
  try {
    await seeder.import();
  } catch (error) {}
};
