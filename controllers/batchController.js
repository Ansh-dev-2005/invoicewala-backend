// const Batch = require("../models/Batch");
import Batch from "../models/Batch.js";
const  createBatch = async (req, res) => {
  try {
    const newBatch = new Batch(req.body);
    await newBatch.save();
    res.status(201).json(newBatch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const  getBatches = async (req, res) => {
  try {
    const batches = await Batch.find();
    res.status(200).json(batches);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const  getBatchById = async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id);
    if (!batch) return res.status(404).json({ message: "Batch not found" });
    res.status(200).json(batch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const  updateBatch = async (req, res) => {
  try {
    const updatedBatch = await Batch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBatch)
      return res.status(404).json({ message: "Batch not found" });
    res.status(200).json(updatedBatch);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const  deleteBatch = async (req, res) => {
  try {
    await Batch.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createBatch, getBatches, getBatchById, updateBatch, deleteBatch };