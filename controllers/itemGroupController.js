import ItemGroup from "../models/ItemGroup.js"
const  createItemGroup = async (req, res) => {
  const { name, shortName, attributes } = req.body;

  try {
    const newItemGroup = new ItemGroup({ name, shortName, attributes });
    await newItemGroup.save();
    res.status(201).json(newItemGroup);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const getAllItemGroups = async (req, res) => {
  try {
    const itemGroups = await ItemGroup.find();
    res.status(200).json(itemGroups);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const getItemGroupById = async (req, res) => {
  try {
    const itemGroup = await ItemGroup.findById(req.params.id);
    if (!itemGroup) {
      return res.status(404).json({ message: "Item group not found" });
    }
    res.status(200).json(itemGroup);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateItemGroup = async (req, res) => {
  const { name, shortName, attributes } = req.body;

  try {
    let itemGroup = await ItemGroup.findById(req.params.id);
    if (!itemGroup) {
      return res.status(404).json({ message: "Item group not found" });
    }

    itemGroup.name = name;
    itemGroup.shortName = shortName;
    itemGroup.attributes = attributes;

    await itemGroup.save();
    res.status(200).json(itemGroup);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteItemGroup = async (req, res) => {
  try {
    let itemGroup = await ItemGroup.findById(req.params.id);
    if (!itemGroup) {
      return res.status(404).json({ message: "Item group not found" });
    }

    await itemGroup.remove();
    res.status(204).json({ message: "Item group deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export { createItemGroup, getAllItemGroups, getItemGroupById, updateItemGroup, deleteItemGroup };