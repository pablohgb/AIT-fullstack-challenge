const router = require("express").Router();

const gifItemsModel = require("../models/gifItems");

router.post("api/item", async (req, res) => {
  try {
    const newItem = new gifItemsModel({
      item: req.body.item,
      caption: req.body.caption,
    });

    const saveItem = await newItem.save();
    res.status(200).json("Gif added succesfully.");
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
