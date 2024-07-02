import mongoose from "mongoose";

const AttributeSchema = new mongoose.Schema({
  key: { type: String, required: true },
  value: { type: mongoose.Schema.Types.Mixed, required: true },
});

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: [String], default: [] },
  description: { type: String },
  itemGroup: { type: mongoose.Schema.Types.ObjectId, ref: "ItemGroup" },
  isActive: { type: Boolean, default: true },
  hsn_code: { type: mongoose.Schema.Types.ObjectId, ref: "HSN" },
  primaryUnit: { type: String },
  secondaryUnit: { type: String },
  conversionFactor: { type: Number },
  batch: { type: mongoose.Schema.Types.ObjectId, ref: "Batch" },
  attributes: { type: [AttributeSchema], default: [] },
});

// module.exports = mongoose.model("Item", ItemSchema);

const Item = mongoose.model("Item", ItemSchema);
export default Item;
