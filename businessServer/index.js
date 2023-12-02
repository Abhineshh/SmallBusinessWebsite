const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.post('/mailadmin', (req, res) => {
  const { email, name , phoneno, query } = req.body;

  // Configure nodemailer (replace with your email service details)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'your-receiveremail@gmail.com',
    subject: subject,
    text: `name : ${name} \n emailID: ${email} \n phone number : ${phoneno} \n message: ${query}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent');
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});