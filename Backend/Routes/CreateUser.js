const express = require('express')
const router = express.Router()
const User = require('../Models/User')
const { body, validationResult } = require('express-validator');

const bcrypt = require("bcryptjs");

router.post("/createuser", [
    body('email',"Enter Valid Email").isEmail(),
    body('name',"Enter Valid Name").isLength({ min: 4 }),
    body('password',"Enter Valid Password").isLength({ min: 5 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(10);
        let secPassword = await bcrypt.hash(req.body.password,salt)

        try {
            await User.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,

            })
            res.json({ success: true });
        } catch (error) {
            res.json({ success: false });

        }


    })

module.exports = router;