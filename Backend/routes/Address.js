const express = require('express');
const { getAllAddress, PostAddress } = require('../controller/Address');


const router = express.Router();
router.get("/", getAllAddress)
    .post("/", PostAddress)

exports.router = router;