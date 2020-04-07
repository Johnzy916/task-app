const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: {
            name: 'AngusDev',
            email: 'no-reply@angusdev.com'
        },
        subject: 'Thanks for joining in!',
        text: `Hey ${name}!
        
Welcome to the app. Have a look around and enjoy!
        
All the best,
Johnzy`,
    })    
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: {
            name: 'AngusDev',
            email: 'no-reply@angusdev.com'
        },
        subject: 'Sorry to see you go!',
        text: `Hey ${name}!
        
Thank you for checking out my app. If you have any tips for me, please let me know!
        
All the best,
Johnzy`,
    })    
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}