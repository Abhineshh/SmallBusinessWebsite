
    const transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'abhineshrv2002@gmail.com',
            pass:'agbohkiu$mui'
        }
});

    const mailOptions = {
        from:'abhineshrv2002@gmail.com',
        to: 'abhinesh.on@gmail.com',
        subject:"client message or query",
        text:`name :  mailId : ${mail} phoneno : `
    };

    transporter.sendMail(mailOptions,(error,info) =>{
        if(error){
           // console.error('error sendign email:',error);
            res.status(500).send('error sending email');
        } else {
           // console.log('email send:',info.response);
            res.status(200).send('Email send');
        }
    })

});