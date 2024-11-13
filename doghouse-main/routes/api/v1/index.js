const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("models/Dog");
const Dog = mongoose.model("dogs");

// GET All Dogs
router.get('/dogs', async function(req, res, next) {
  const dogs = await Dog.find({});
  res.json(dogs);
});

// GET Specific Number of Dogs
router.get('/dogs/count/:num(\\d+)', async function(req, res, next) {
  const dogs = await Dog.find({}).limit(parseInt(req.params.num));
  res.json(dogs);
});

// GET Dogs by Name
router.get('/dogs/name/:name', async function(req, res, next) {
  const dogs = await Dog.find({ name: req.params.name });
  res.json(dogs);
});

//GET Dogs by Breed
router.get('/dogs/breed/:breed', async function(req, res, next) {
  const dogs = await Dog.find({ breed: req.params.breed });
  res.json(dogs);
});

// GET Dogs by Age
router.get('/dogs/age/:age(\\d+)', async function(req, res, next) {
  const dogs = await Dog.find({ age: req.params.age });
  res.json(dogs);
});

// GET Dogs by Treat
router.get('/dogs/treat/:treat', async function(req, res, next) {
  const dogs = await Dog.find({ treat: req.params.treat });
  res.json(dogs);
});

// GET Dogs by Maxiumum Age
router.get('/dogs/age/max/:age(\\d+)', async function(req, res, next) {
  const dogs = await Dog.find({ age: { $lte: req.params.age } });
  res.json(dogs);
});

// GET Dogs by Minimum Age
router.get('/dogs/age/min/:age(\\d+)', async function(req, res, next) {
  const dogs = await Dog.find({ age: { $gte: req.params.age } });
  res.json(dogs);
});

// GET Unique Breeds
router.get('/breeds', async function(req, res, next) {
  const dogs = await Dog.find({}).distinct('breed');
  res.json(dogs);
});

// GET Unique Treats
router.get('/treats', async function(req, res, next) {
  const dogs = await Dog.find({}).distinct('treat');
  res.json(dogs);
});

module.exports = router;