// const express = require("express");
// const router = express.Router();
// const { check } = require("express-validator");
// const auth = require("../middleware/auth");
// const authController = require("../controllers/authController");
import express from "express";
import { check } from "express-validator";
import auth from "../middleware/auth.js";
import { getUser, loginUser, registerUser } from "../controllers/authController.js";
// import { registerUser, loginUser } from "../controllers/authController.js";
const router = express.Router();
// @route    POST api/auth/register
// @desc     Register user
// @access   Public
router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  registerUser
);

// @route    POST api/auth/login
// @desc     Authenticate user & get token
// @access   Public
router.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  loginUser
);

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get("/", auth, getUser);

export default router;