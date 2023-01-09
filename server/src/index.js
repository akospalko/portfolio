const express = require('express');
const app = express();
const bp = require('body-parser');
const sendEmail = require('../routes/sendEmail');

const port = 3000;

//middleware
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }));

//routes
app.use('/sendmail', sendEmail); // send email

app.listen(port, () => {
  console.log('listening on port', port);
})