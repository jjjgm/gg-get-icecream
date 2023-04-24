const express = require('express');
const router = express.Router();
const Dog = require('../../models/users');
const db = require('../../models')

// Route for displaying all dogs
router.get('/dogs', async (req, res) => {
  try {
    const dogs = await db.Dog.findAll();
    res.render('index', { dogs });
  } catch (error) {
    console.log(error);
    res.redirect('/dogs');
  }
});

// Route for displaying the form to create a new dog
router.get('/dogs/new', (req, res) => {
  res.render('dogs/new');
});

// Route for creating a new dog
router.post('/dogs', async (req, res) => {
  try {
    const newDog = await db.Dog.create({
      name: req.body.name,
      breed: req.body.breed,
      age: req.body.age,
      userId: req.session.user.id,
    });
    res.redirect(`/dogs/${newDog.id}`);
  } catch (error) {
    console.log(error);
    res.redirect('/dogs/new');
  }
});

// Route for displaying a specific dog
router.get('/dogs/:id', async (req, res) => {
  try {
    const dog = await db.Dog.findByPk(req.params.id, {
      include: db.User,
    });
    if (!dog) {
      return res.redirect('/dogs');
    }
    res.render('/dogs/show', { dog });
  } catch (error) {
    console.log(error);
    res.redirect('/dogs');
  }
});

// Route for displaying the form to edit a dog
router.get('/dogs/:id/edit', async (req, res) => {
  try {
    const dog = await db.Dog.findByPk(req.params.id);
    if (!dog || dog.userId !== req.session.user.id) {
      return res.redirect('/dogs');
    }
    res.render('dogs/edit', { dog });
  } catch (error) {
    console.log(error);
    res.redirect(`/dogs/${req.params.id}`);
  }
});

// Route for updating a dog
router.put('dogs/:id', async (req, res) => {
  try {
    const dog = await db.Dog.findByPk(req.params.id);
    if (!dog || dog.userId !== req.session.user.id) {
      return res.redirect('/dogs');
    }
    await dog.update({
      name: req.body.name,
      breed: req.body.breed,
      age: req.body.age,
    });
    res.redirect(`/dogs/${dog.id}`);
  } catch (error) {
    console.log(error);
    res.redirect(`/dogs/${req.params.id}/edit`);
  }
});

// Route for deleting a dog
router.delete('/dogs/:id', async (req, res) => {
  try {
    const dog = await db.Dog.findByPk(req.params.id);
    if (!dog || dog.userId !== req.session.user.id) {
      return res.redirect('/dogs');
    }
    await dog.destroy();
    res.redirect('/dogs');
  } catch (error) {
    console.log(error);
    res.redirect('/dogs');
  }
});

module.exports = router;
