import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  comment: { type: String },
});

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
