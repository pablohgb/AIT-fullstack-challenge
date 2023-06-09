const router = require('express').Router()
const UserModel = require('../models/users.model')
router.post('/user/register', async (req, res) => {
    try {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        const hash = bcrypt.hashSync(req.body.password, saltRounds);
        const newUser = new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            uploadedGifs: []
        });
        const saveUser = await newUser.save();
        res.status(200).json(saveUser);
    } catch (error) {
        res.json(error);
    }
})
router.get('/user/getOne/:id', async (req, res) => {
    try {
        const userInfo = await UserModel.findById(req.params.id);

        res.status(200).send(userInfo)
    } catch (error) {
        res.json(error);
    }
})

router.get('/user/login', async (req, res) => {
    try {
        const userParams = await UserModel.findOne(req.params.username);
        if (bcrypt.compareSync(req.params.password, userParams.password)) {
            res.status(200).send(userParams);
        }
        res.status(200).send(userParams);
    } catch (error) {
        res.json(error);
    }
})

router.put('/gif/item/:id', async (req, res) => {
    try {
        await UserModel.findByIdAndUpdate(req.params.id)
    } catch (error) {
        res.json(error)
    }
})
router.delete('/user/delete/:id', async (req, res) => {
    try {
        await UserModel.findByIdAndDelete(req.params.id, {
            $set: req.body
        });
        res.status(200).json('User Deleted')
    } catch (error) {
        res.json(err);
    }
})

module.exports = router;
