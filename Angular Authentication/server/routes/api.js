const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user.js');
const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/test";

mongoose.connect(db, err =>{
    if (err) {
        console.error('Error' + err)
    } else {
        console.log('Connected to mongodb')
    }
})

router.get('/', (req, res) => {
  res.send('From Api route');
})

router.get('/register', (req, res) =>{
    res.send('From Register Route');
})

router.post('/register', (req, res) => {
    res.send('From Register Route')
    let userData = req.body;
    let user = new User(userData);
    user.save((error, registeredUser) =>{
        if (error) {
            console.log(error);
        } else {
            let payload = {subjet: registeredUser._id};
            let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({token})
        }
    })
})

router.get('/login', (req, res) =>{
    res.send('From Login Route');
})

router.post('/login', (req, res) => {
    let userData = req.body;

    User.find({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send('Invalid email');
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send('Invalid password');
                } else {
                    let payload = {subject: user._id};
                    let token = jwt.sign(payload, 'secretKey');
                    res.status(200).send({token});
                }
            }
        }
    })
})

router.get('/events', (req, res) =>{
    let events = [
        {
            "_id": "1",
            "name": "Abc",
            "description": "lorem ipsum",
            "date": "2022-04-23T18:25:43.5112"
        },
        {
            "_id": "2",
            "name": "Abc",
            "description": "lorem ipsum",
            "date": "2022-04-23T18:25:43.5112"
        }
]

res.json(events);
})


module.exports = router;

