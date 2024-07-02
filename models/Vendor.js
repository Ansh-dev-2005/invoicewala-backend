import mongoose from "mongoose";

const VendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String },
  address: { type: String },
  state: { type: String },
  city: { type: String },
  pincode: { type: String },
  gstin: { type: String },
  gst_state: { type: String },
  email: { type: String },
  isActive: { type: Boolean, default: true },
  msmeRegNo: { type: String },

  // Add other fields as needed
});

// module.exports = mongoose.model("Vendor", VendorSchema);
const Vendor = mongoose.model("Vendor", VendorSchema);
export default Vendor;