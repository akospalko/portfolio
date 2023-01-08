const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const bp = require('body-parser')
require('dotenv').config(); // access .env contents

const port = 3000;

//middleware
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

//routes
app.post('/sendmail', (req , res) => {
  console.log('req body...', req.body.name, req.body.email, req.body.message)
  res.status(200).json({'hello!': 'bello!'});
  if(!req.body) return;
  //testing nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD
    }
  });

  const mailOptions = {
    from: req.body.email, 
    to: process.env.NODEMAILER_EMAIL,
    text: req.body.message
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})

app.listen(port, () => {
  console.log('listening on port', port);
})