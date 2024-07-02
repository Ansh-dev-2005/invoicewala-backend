import mongoose from "mongoose";

const HSNModel = new mongoose.Schema({
  hsn_code: {
    type: String,
    required: true,
    unique: true,
  },
  hsn_description: {
    type: String,
    required: true,
  },
  cgst: {
    type: Number,
    required: true,
  },
  sgst: {
    type: Number,
    required: true,
  },
  igst: {
    type: Number,
    required: true,
  },
  cess: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});


const HSN = mongoose.model("HSN", HSNModel);
export default HSN;