import nodemailer from 'nodemailer';

function sendEmail(email,password)
{

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vilekhofficial@gmail.com',
    pass: 'jklxxpyuvqceidvb'
  }
});

var mailOptions = {
  from: 'vilekhofficial@gmail.com',
  to: email,
  subject: 'Verification mail eAuction',
  html: "<h1>Welcome to eAuction</h1><p>You have successfully register on our application , tour login credentials are attached below</p><h3>Username : "+email+"</h3><h3>Password : "+password+"</h3><h2>click on the link below to verify your account</h2>http://localhost:3000/verifyuser/"+email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}

export default sendEmail;