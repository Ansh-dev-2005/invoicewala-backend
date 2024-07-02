import Vendor from "../models/Vendor.js";
// Create a new vendor
const  createVendor = async (req, res) => {
  const { name, address, contactNumber } = req.body;

  try {
    let vendor = new Vendor({
      name,
      address,
      contactNumber,
    });

    await vendor.save();
    res.json(vendor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get all vendors
const  getVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Get a vendor by ID
const  getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);

    if (!vendor) {
      return res.status(404).json({ msg: "Vendor not found" });
    }

    res.json(vendor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Update a vendor
const  updateVendor = async (req, res) => {
  const { name, address, contactNumber } = req.body;

  const vendorFields = {};
  if (name) vendorFields.name = name;
  if (address) vendorFields.address = address;
  if (contactNumber) vendorFields.contactNumber = contactNumber;

  try {
    let vendor = await Vendor.findById(req.params.id);

    if (!vendor) {
      return res.status(404).json({ msg: "Vendor not found" });
    }

    vendor = await Vendor.findByIdAndUpdate(
      req.params.id,
      { $set: vendorFields },
      { new: true }
    );

    res.json(vendor);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Delete a vendor
const  deleteVendor = async (req, res) => {
  try {
    let vendor = await Vendor.findById(req.params.id);

    if (!vendor) {
      return res.status(404).json({ msg: "Vendor not found" });
    }

    await Vendor.findByIdAndRemove(req.params.id);

    res.json({ msg: "Vendor removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export { createVendor, getVendors, getVendorById, updateVendor, deleteVendor };