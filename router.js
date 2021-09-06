const express = require("express");
const model = require("./model");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", async (req, res) => {
  const data = await model.find();
  res.status(200).json(data);
});
router.get("/:id", async (req, res) => {
  const singleData = await model.findById(req.params.id);
  res.status(200).json(singleData);
});
router.post("/", async (req, res) => {
  const createData = await model.create(req.body);
  res.status(200).json(createData);
});
router.patch("/:id", async (req, res) => {
  const updatedData = await model.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(updatedData);
});
router.delete("/:id", async (req, res) => {
  const data = await model.findByIdAndRemove(req.params.id, req.body);
  res.status(200).json("item deleted");
});

module.exports = router;
