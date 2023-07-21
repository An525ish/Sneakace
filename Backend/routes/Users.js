const express = require('express');
const { fetchUserById, updateUser, getAllUsers } = require('../controller/User');

const router = express.Router();
//  /users is already added in base path
router
.get('/', getAllUsers)
.get('/own:email', fetchUserById)
.patch('/:email', updateUser);

exports.router = router;
