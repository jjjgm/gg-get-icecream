const express = require('express');
const router = express.Router();
const Pet = require('../../models/Pet');

// GET all pets
router.get('/api/pets', async (req, res) => {
    try {
        const pets = await Pet.findAll({});
        res.status(200).json(pets);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single pet by ID
router.get('/pets/:id', async (req, res) => {
    try {
        const pet = await Pet.findByPk(req.params.id);
        res.status(200).json(pet);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST a new pet
router.post('/api/pets', async (req, res) => {
    try {
        const newPet = await Pet.create(req.body);
        res.status(200).json(newPet);
    } catch (err) {
        res.status(500).json(err);
    }
});

// PUT update an existing pet
router.put('/api/pets/:id', async (req, res) => {
    try {
        const updatedPet = await Pet.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(updatedPet);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE a Pet
router.delete('/api/pets/:id', async (req, res) => {
    try {
        const pet = await Pet.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(pet);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
