import mongoose from "mongoose";

const GoodsIssueSchema = new mongoose.Schema({
  issueDate: { type: Date, required: true },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
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

// module.exports = mongoose.model("GoodsIssue", GoodsIssueSchema);

const GoodsIssue = mongoose.model("GoodsIssue", GoodsIssueSchema);
export default GoodsIssue;