const dotenv = require("dotenv");
const products = require("../data/products");
const Product = require("../models/productModel.js");
const connectDB = require("./db");

dotenv.config();
connectDB();

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

// importProducts();
// deleteProducts();

switch (process.argv[2]) {
  case "-d": {
    deleteProducts();
    break;
  }
  default: {
    importProducts();
  }
}
