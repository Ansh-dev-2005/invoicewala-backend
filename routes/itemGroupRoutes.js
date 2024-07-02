// const express = require("express");
// const router = express.Router();
// const itemGroupController = require("../controllers/itemGroupController");
// const authMiddleware = require("../middlewares/authMiddleware");
// const express = require("express");
import express from "express";
const router = express.Router();
import { createItemGroup, deleteItemGroup, getAllItemGroups, getItemGroupById, updateItemGroup } from "../controllers/itemGroupController.js";
import authMiddleware from "../middleware/auth.js";
// Item Group Routes
router.post(
  "/item-groups",
  authMiddleware,
  createItemGroup
);
router.get(
  "/get-item-groups",
  authMiddleware,
  getAllItemGroups
);
router.get(
  "/get-item-groups/:id",
  authMiddleware,
getItemGroupById
);
router.put(
  "/update-item-groups/:id",
  authMiddleware,
  updateItemGroup
);
router.delete("/delete-item-groups/:id", authMiddleware, deleteItemGroup);
export default router;