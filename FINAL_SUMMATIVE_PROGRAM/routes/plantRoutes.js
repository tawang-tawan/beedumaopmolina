const express = require('express');
const router = express.Router();
const Plant = require('../models/plant');

// Home
router.get('/', (req, res) => {
    res.render('index');
});

// Show all plants
router.get('/plants', async (req, res) => {
    const plants = await Plant.find();
    res.render('plants', { plants });
});

// Add new plant form
router.get('/plants/add', (req, res) => {
    res.render('addPlant');
});

// Create new plant
router.post('/plants', async (req, res) => {
    await Plant.create(req.body);
    res.redirect('/plants');
});

// Edit plant form
router.get('/plants/:id/edit', async (req, res) => {
    const plant = await Plant.findById(req.params.id);
    res.render('editPlant', { plant });
});

// Update plant
router.put('/plants/:id', async (req, res) => {
    await Plant.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/plants');
});

// Delete plant
router.delete('/plants/:id', async (req, res) => {
    await Plant.findByIdAndDelete(req.params.id);
    res.redirect('/plants');
});

module.exports = router;
