import express from "express";
import mongoose from "mongoose";
import AdminJS from "adminjs";
// import AdminJSExpress from "@adminjs/express";
import * as AdminJSExpress from "@adminjs/express";

// import AdminJSMongoose from "@adminjs/mongoose";
import * as AdminJSMongoose from "@adminjs/mongoose";
import fs from "fs";
import path from "path";
import cors from "cors";
// Import models
import ItemGroup from "./models/ItemGroup.js";
import Item from "./models/Item.js";
import Vendor from "./models/Vendor.js";
import Batch from "./models/Batch.js";
import GoodsReceive from "./models/GoodsReceive.js";
import GoodsIssue from "./models/GoodsIssue.js";
import HSN from "./models/HSN.js";
import Customer from "./models/Customer.js";
import User from "./models/User.js";
import dotenv from "dotenv";
dotenv.config();

// MongoDB URI
const mongoURI =
  "mongodb://127.0.0.1:27017/inventory_management?directConnection=true";

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
app.use(cors());

app.use(express.json({ extended: false }));

// Define routes
import itemGroupRoutes from "./routes/itemGroupRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import vendorRoutes from "./routes/vendorRoutes.js";
import batchRoutes from "./routes/batchRoutes.js";
import goodsReceiveRoutes from "./routes/goodsReceiveRoutes.js";
import goodsIssueRoutes from "./routes/goodsIssueRoutes.js";
import hsnRoutes from "./routes/hsn.js";
import authRoutes from "./routes/authRoutes.js"

app.use("/api/auth", authRoutes)
app.use("/api/item-groups", itemGroupRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/batches", batchRoutes);
app.use("/api/goods-receive", goodsReceiveRoutes);
app.use("/api/goods-issue", goodsIssueRoutes);
app.use("/api/hsn", hsnRoutes);

AdminJS.registerAdapter({
  Resource: AdminJSMongoose.Resource,
  Database: AdminJSMongoose.Database,
});

app.get("/", (req, res) => {
  res.send("Welcome to my marketplace app");
});

const start = async () => {
  // Load and parse JSON translation file
  // const deLocalePath = path.resolve(__dirname, "de", "translation.json");
  // const deLocaleContent = fs.readFileSync(deLocalePath, "utf-8");
  // const deLocale = JSON.parse(deLocaleContent);
// 
  const admin = new AdminJS({
    resources: [
      ItemGroup,
      Item,
      Vendor,
      Batch,
      GoodsReceive,
      GoodsIssue,
      HSN,
      Customer,
      User,
    ],
    rootPath: "/admin",
    // locale: {
    //   translations: {
    //     labels: deLocale,
    //   },
    // },
  });

  const adminRouter = AdminJSExpress.buildRouter(admin);
  app.use(admin.options.rootPath, adminRouter);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

start();

app.get("/", (req, res) => res.send("API Running"));
