import mongoose from "mongoose";
const BatchSchema = new mongoose.Schema({
  batchNumber: { type: String, required: true },
  item: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
  quantity: { type: Number },
    expiryDate: { type: Date, },
    manufactureDate: { type: Date, },
    mrp: { type: Number, },
    purchasePrice: { type: Number, },
    salePrice: { type: Number, },
    rsp: { type: Number, },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    

  
});

// module.exports = mongoose.model("Batch", BatchSchema);

const Batch = mongoose.model("Batch", BatchSchema);
export default Batch;