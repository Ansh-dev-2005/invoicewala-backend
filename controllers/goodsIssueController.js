import GoodsIssue from "../models/GoodsIssue.js";
const  createGoodsIssue = async (req, res) => {
  try {
    const newGoodsIssue = new GoodsIssue(req.body);
    await newGoodsIssue.save();
    res.status(201).json(newGoodsIssue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const  getGoodsIssues = async (req, res) => {
  try {
    const goodsIssues = await GoodsIssue.find();
    res.status(200).json(goodsIssues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const  getGoodsIssueById = async (req, res) => {
  try {
    const goodsIssue = await GoodsIssue.findById(req.params.id);
    if (!goodsIssue)
      return res.status(404).json({ message: "Goods issue not found" });
    res.status(200).json(goodsIssue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const  updateGoodsIssue = async (req, res) => {
  try {
    const updatedGoodsIssue = await GoodsIssue.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedGoodsIssue)
      return res.status(404).json({ message: "Goods issue not found" });
    res.status(200).json(updatedGoodsIssue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const  deleteGoodsIssue = async (req, res) => {
  try {
    await GoodsIssue.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createGoodsIssue, getGoodsIssues, getGoodsIssueById, updateGoodsIssue, deleteGoodsIssue };