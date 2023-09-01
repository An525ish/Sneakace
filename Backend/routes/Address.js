const express = require('express');
const { getAllAddress, PostAddress } = require('../controller/Address');


const router = express.Router();
route.get("/", getAllAddress)
    .post("/", PostAddress)

exports.router = router;