import dotenv from "dotenv";
import products from "../data/products.js";
import Product from "../models/productModel.js";
import connectDB from "./db.js";
import Users from "../data/users.js";
import mongoose from "mongoose";
import colors from "colors";
import faker from "faker";

dotenv.config();
connectDB();

const seedDB = async () => {
  // Connection URL
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
  try {
    // await client.connect();
    console.log("Connected correctly to server");
    const collection = client.db("iot").collection("kitty-litter-time-series");
    // The drop() command destroys all data from a collection.
    // Make sure you run it against proper database and collection.
    collection.drop();
    // make a bunch of time series data
    let timeSeriesData = [];
    for (let i = 0; i < 5000; i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      let newDay = {
        timestamp_day: faker.date.past(),
        cat: faker.random.word(),
        owner: {
          email: faker.internet.email(firstName, lastName),
          firstName,
          lastName,
        },
        events: [],
      };
      for (let j = 0; j < randomIntFromInterval(1, 6); j++) {
        let newEvent = {
          timestamp_event: faker.date.past(),
          weight: randomIntFromInterval(14, 16),
        };
        newDay.events.push(newEvent);
      }
      timeSeriesData.push(newDay);
    }
    collection.insertMany(timeSeriesData);
    console.log("Database seeded! :)");
    client.close();
  } catch (err) {
    console.log(err.stack);
  }
};
export default seedDB;
