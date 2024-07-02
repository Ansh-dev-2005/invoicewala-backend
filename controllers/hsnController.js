
import HSN from "../models/HSN.js";
// Add a new HSN
const  addHSN = async (req, res) => {
  const { hsn_code, hsn_description, hsn_rate } = req.body;

  try {
    const newHSN = new HSN(req.body);

    const hsn = await newHSN.save();
    res.json(hsn);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get all HSNs
const  getHSNs = async (req, res) => {
  try {
    const hsns = await HSN.find();
    res.json(hsns);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get HSN by ID
const  getHSNById = async (req, res) => {
  try {
    const hsn = await HSN.findById(req.params.id);

    if (!hsn) {
      return res.status(404).json({ msg: "HSN not found" });
    }

    res.json(hsn);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "HSN not found" });
    }
    res.status(500).send("Server Error");
  }
};

// Update HSN
const  updateHSN = async (req, res) => {
  const { hsn_code, hsn_description, hsn_rate } = req.body;

  const hsnFields = {};
  if (hsn_code) hsnFields.hsn_code = hsn_code;
  if (hsn_description) hsnFields.hsn_description = hsn_description;
  if (hsn_rate) hsnFields.hsn_rate = hsn_rate;

  try {
    let hsn = await HSN.findById(req.params.id);

    if (!hsn) {
      return res.status(404).json({ msg: "HSN not found" });
    }

    hsn = await HSN.findByIdAndUpdate(
      req.params.id,
      { $set: hsnFields },
      { new: true }
    );

    res.json(hsn);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Delete HSN
const  deleteHSN = async (req, res) => {
  try {
    const hsn = await HSN.findById(req.params.id);

    if (!hsn) {
      return res.status(404).json({ msg: "HSN not found" });
    }

    await hsn.remove();

    res.json({ msg: "HSN removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "HSN not found" });
    }
    res.status(500).send("Server Error");
  }
};

export { addHSN, getHSNs, getHSNById, updateHSN, deleteHSN };