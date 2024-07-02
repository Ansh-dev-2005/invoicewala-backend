import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String },
  address: { type: String },
});


// module.exports = mongoose.model("Customer", CustomerSchema);
const Customer = mongoose.model("Customer", CustomerSchema);
export default Customer;