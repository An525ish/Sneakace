const express = require('express');
const { createUser, loginUser, checkAuth, logout, refreshToken } = require('../controller/Auth');
const passport = require('passport');
const { fetchUserById, updateUser } = require('../controller/User');

const router = express.Router();
//  /auth is already added in base path
router
.post('/signup', createUser)
.post('/login', passport.authenticate('local'), loginUser)
.post('/refresh-token', refreshToken)
.get('/check',passport.authenticate('jwt'), checkAuth)
.get('/own', fetchUserById)
.patch('/:id', updateUser)
.get('/logout', logout)

exports.router = router;