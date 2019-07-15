var nodemailer = require('nodemailer');
var readline=require('readline-sync');

var transporter = nodemailer.createTransport({
    service: "gmail",
    //host: 'smtp.gmail.com',
    //port: 79,
    //secure: false,
    auth: {
        user:readline.question(" Enter your email address"),
        pass:readline.question(" Enter your password"),
    }
});

var mailOptions = {
    from: readline.question("Enter sender's mail address"),
    to: readline.question("Enter receiver's mail address"),
    subject: readline.question(" Enter subject of mail"),
    text: readline.question(" Enter text of mail")
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});