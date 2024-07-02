import mongoose from "mongoose";

const ItemGroupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  shortName: { type: String, required: true },
  attributes: { type: Array, default: [] },
});

// module.exports = mongoose.model("ItemGroup", ItemGroupSchema);
const ItemGroup = mongoose.model("ItemGroup", ItemGroupSchema);
export default ItemGroup;