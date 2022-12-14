const express = require('express')
const router = express.Router()
const User = require('../models/user.model')

router.post('', async(req, res) => {
    try {

        const user = await User.create(req.body)

        return res.status(201).send({user})
        
    } catch (error) {
        return res.status(500).send(error.message)
        
    }
} )


router.get('', async(req, res) => {
    try {

        const users = await User.find()

        return res.status(200).send({users})
        
    } catch (error) {
        return res.status(500).send(error.message)
        
    }
} )

module.exports = router