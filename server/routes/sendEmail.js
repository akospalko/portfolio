const express = require('express');
const app = express();
const sendEmail = require('../controllers/sendEmail'); 
const router = express.Router();

//routes for /sendmail
router.post('/', sendEmail); 

module.exports = sendEmail;