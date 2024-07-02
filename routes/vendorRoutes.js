// const express = require("express");
// const router = express.Router();
// const VendorController = require("../controllers/vendorController");
// const authMiddleware = require("../middlewares/authMiddleware");
import express from "express";
const router = express.Router();
import  { createVendor, deleteVendor, getVendorById, getVendors, updateVendor } from "../controllers/vendorController.js";
import authMiddleware from "../middleware/auth.js";
router.post("/vendors", authMiddleware, createVendor);
router.get("/vendors", authMiddleware, getVendors);
router.get("/vendors/:id", authMiddleware, getVendorById);
router.put("/vendors/:id", authMiddleware, updateVendor);
router.delete("/vendors/:id", authMiddleware, deleteVendor);

export default router;