import GoodsReceive from "../models/GoodsReceive.js";
const  createGoodsReceive = async (req, res) => {
  try {
    const newGoodsReceive = new GoodsReceive(req.body);
    await newGoodsReceive.save();
    res.status(201).json(newGoodsReceive);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const  getGoodsReceives = async (req, res) => {
  try {
    const goodsReceives = await GoodsReceive.find();
    res.status(200).json(goodsReceives);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const  getGoodsReceiveById = async (req, res) => {
  try {
    const goodsReceive = await GoodsReceive.findById(req.params.id);
    if (!goodsReceive)
      return res.status(404).json({ message: "Goods receive not found" });
    res.status(200).json(goodsReceive);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const  updateGoodsReceive = async (req, res) => {
  try {
    const updatedGoodsReceive = await GoodsReceive.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedGoodsReceive)
      return res.status(404).json({ message: "Goods receive not found" });
    res.status(200).json(updatedGoodsReceive);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const  deleteGoodsReceive = async (req, res) => {
  try {
    await GoodsReceive.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createGoodsReceive, getGoodsReceives, getGoodsReceiveById, updateGoodsReceive, deleteGoodsReceive };