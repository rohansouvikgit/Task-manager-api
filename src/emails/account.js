const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rohan.souvik.3@gmail.com',
        subject: 'Thanks for joining with us!',
        text: `Welcome to the app, ${name}.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'rohan.souvik.3@gmail.com',
        subject: 'Goodbye from the TEAM',
        text: `Bye bye ${name}. Hope to see your next time...`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}