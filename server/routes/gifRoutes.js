const router = require('express').Router();

const TodoItemModel = require('../models/gifItems');

router.post('/api/item', async (req, res) => {
  try {
    const newItem = new TodoItemModel({
      item: req.body.item,
      caption: req.body.caption
    });
    const saveItem = await newItem.save();
    res.status(200).json(saveItem);
  } catch (err) {
    res.json(err);
  }
});

router.get('/api/items', async (_req, res) => {
  try {
    const allGifItems = await GifItemModel.find({});

    res.status(200).json(allGifItems);
  } catch (err) {
    res.json(err);
  }
});

router.get('/api/items/getOne', async (req, res) => {
  try {
    const allGifItems = await GifItemModel.findById(req.params.id);

    res.status(200).json(allGifItems);
  } catch (err) {
    res.json(err);
  }
});

router.put('/api/item/:id', async (req, res) => {
  try {
    const updateItem = await GifItemModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    });
    res.status(200).json('Item Updated');
  } catch (err) {
    res.json(err);
  }
});

router.delete('/api/item/:id', async (req, res) => {
  try {
    const deleteItem = await GifItemModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Item Deleted');
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
