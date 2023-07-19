const express = require('express');
const { fetchCupons, createCupon, deleteCupon, updateCupon } = require('../controller/Cupon');

const router = express.Router();
router.get('/', fetchCupons).post('/create', createCupon).delete("/delete/:id", deleteCupon).patch("/update/:id", updateCupon)

exports.router = router;