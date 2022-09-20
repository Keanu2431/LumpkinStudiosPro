const fs = require(`fs`);
const http = require(`http`);
const url = require(`url`);
const path = require('path');
//
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 8000;
// MIDDLEWARE to get static files
app.use(express.static('./src'));
app.use(express.json());
app.get(`/`, (req, res) => {
  console.log(__dirname, '1');
  // res.sendFile(__dirname + './src/index.html');
});
app.get(`/contact`, (req, res) => {
  console.log(req.route);
});
app.post(`/`, (req, res) => {
  console.log(req.body);
  const body = req.body;
  // const obj = JSON.parse(req.body);
  // console.log(obj);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: 'lumpkinstudios@gmail.com', pass: 'qwlfrhyrfdyxgrlk' },
  });
  const mailOptions = {
    from: req.body.email,
    to: 'lumpkinstudios@gmail.com',
    subject: `Lumpkin Studios Inquiry Buisness Page from ${body.name}`,
    text: `Greetings From ${body.name} representing ${body.company} I wanted to write you today to say ${body.message}, I can be reached at ${body.email} or ${body.number}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('email sent success');
      res.send('success');
    }
  });
});
app.listen(PORT, () => {
  console.log(`server up on ${PORT}`);
});
