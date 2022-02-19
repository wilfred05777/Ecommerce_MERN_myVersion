import express from "express";
import AsyncHandler from "express-async-handler";
const router = express.Router();
import Contact from "../models/contactModel.js";

router.get(
  "/",
  AsyncHandler(async (req, res) => {
    const contacts = await Contact.find({});
    res.json(contacts);
  })
);

export default router;
