import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: "User",
    // },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    message: { type: String },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
