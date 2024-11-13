const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("models/Dog");
const Dog = mongoose.model("dogs");

// GET home page.
router.get('/', async function(req, res, next) {
  const dogs = await Dog.find({});
  res.render('index', { title: 'DogHouse', dogs });
});

// GET Add Dog page.
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Add Dog' });
});

// POST a new dog.
router.post('/add', async function(req, res, next) {
  const dog = new Dog({
    name: req.body.name,
    gender: req.body.gender,
    breed: req.body.breed,
    age: req.body.age,
    treat: req.body.treat
  });
  await dog.save();
  res.redirect('/add');
});

module.exports = router;