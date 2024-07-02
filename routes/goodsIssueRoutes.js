// const express = require("express");
// const router = express.Router();
// const GoodsIssueController = require("../controllers/goodsIssueController");
// const authMiddleware = require("../middlewares/authMiddleware");
import express from "express";
import  { createGoodsIssue, deleteGoodsIssue, getGoodsIssueById, getGoodsIssues, updateGoodsIssue } from "../controllers/goodsIssueController.js";
import authMiddleware from "../middleware/auth.js";
const router = express.Router();
router.post(
  "/goods-issues",
  authMiddleware,
  createGoodsIssue
);
router.get(
  "/goods-issues",
  authMiddleware,
  getGoodsIssues
);
router.get(
  "/goods-issues/:id",
  authMiddleware,
  getGoodsIssueById
);
router.put(
  "/goods-issues/:id",
  authMiddleware,
  updateGoodsIssue
);
router.delete(
  "/goods-issues/:id",
  authMiddleware,
  deleteGoodsIssue
);

export default router;