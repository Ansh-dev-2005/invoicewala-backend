// const express = require("express");
// const router = express.Router();
// const BatchController = require("../controllers/batchController");
// const authMiddleware = require("../middlewares/authMiddleware");
import express from "express";
import  { createBatch, deleteBatch, getBatchById, getBatches, updateBatch } from "../controllers/batchController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();
router.post("/batches", authMiddleware, createBatch);
router.get("/batches", authMiddleware, getBatches);
router.get("/batches/:id", authMiddleware, getBatchById);
router.put("/batches/:id", authMiddleware, updateBatch);
router.delete("/batches/:id", authMiddleware, deleteBatch);
export default router;