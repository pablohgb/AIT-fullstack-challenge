const router = require('express').Router();

const GifItemModel = require('../models/gifItems.model');

router.post('/gif/item', async (req, res) => {
  try {
    const newItem = new GifItemModel({
      item: req.body.item,
      caption: req.body.caption,
      uploadedById: req.body.uploadedById
    });
    const saveItem = await newItem.save();
    res.status(200).json(saveItem);
  } catch (err) {
    res.json(err);
  }
});

router.get('/gif/items', async (_req, res) => {
  try {
    const allGifItems = await GifItemModel.find().lean().exec();

    res.status(200).send(allGifItems);
  } catch (err) {
    res.json(err);
  }
});

router.get('/gif/item/getOne/:id', async (req, res) => {
  try {
    const gifItem = await GifItemModel.findById(req.params.id);

    res.status(200).send(gifItem);
  } catch (err) {
    res.json(err);
  }
});

router.put('/gif/item/:id', async (req, res) => {
  try {
    await GifItemModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    });
    res.status(200).json('Item Updated');
  } catch (err) {
    res.json(err);
  }
});

router.delete('/gif/item/:id', async (req, res) => {
  try {
    const deleteItem = await GifItemModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Item Deleted');
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
