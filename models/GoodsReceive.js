import mongoose from "mongoose";

const GoodsReceiveSchema = new mongoose.Schema({
  receiveDate: { type: Date, required: true },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendor",
    required: true,
  },
  items: [
    {
      item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
        required: true,
      },
      quantity: { type: Number, required: true },
      batch_id: { type: mongoose.Schema.Types.ObjectId, ref: "Batch" },
    },
  ],
  // Add other fields as needed
});

// module.exports = mongoose.model("GoodsReceive", GoodsReceiveSchema);
const GoodsReceive = mongoose.model("GoodsReceive", GoodsReceiveSchema);
export default GoodsReceive;