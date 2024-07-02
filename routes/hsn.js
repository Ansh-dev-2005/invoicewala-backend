// const express = require("express");
// const router = express.Router();
// const hsnController = require("../controllers/hsnController");

import express from "express";
import  { addHSN, deleteHSN, getHSNById, getHSNs, updateHSN } from "../controllers/hsnController.js";
const router = express.Router();


router.post("/", addHSN);


router.get("/", getHSNs);


router.get("/:id", getHSNById);


router.put("/:id", updateHSN);

router.delete("/:id", deleteHSN);

export default router;