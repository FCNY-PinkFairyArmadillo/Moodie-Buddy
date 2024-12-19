const express = require('express');
const { loginUser, signupUser, journalUser } = require('../controllers/userController');
const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);
router.post('/journal',)

module.exports = router;