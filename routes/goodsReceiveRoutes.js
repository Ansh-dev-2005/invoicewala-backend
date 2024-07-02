// const express = require("express");
// const router = express.Router();
// const GoodsReceiveController = require("../controllers/goodsReceiveController");
// const authMiddleware = require("../middlewares/authMiddleware");

import express from "express";
import  { createGoodsReceive, deleteGoodsReceive, getGoodsReceiveById, getGoodsReceives, updateGoodsReceive } from "../controllers/goodsReceiveController.js";
import authMiddleware from "../middleware/auth.js";
const router = express.Router();
router.post(
  "/goods-receives",
  authMiddleware,
  createGoodsReceive
);
router.get(
  "/goods-receives",
  authMiddleware,
  getGoodsReceives
);
router.get(
  "/goods-receives/:id",
  authMiddleware,
  getGoodsReceiveById
);
router.put(
  "/goods-receives/:id",
  authMiddleware,
  updateGoodsReceive
);
router.delete(
  "/goods-receives/:id",
  authMiddleware,
  deleteGoodsReceive
);

export default router;