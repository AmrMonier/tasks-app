import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SG_KEY)

export default {
    sendMail: (mailOptions) => {
        mailOptions.from = process.env.SG_SENDER
        sgMail.send(mailOptions).then(() => console.log('mail sent')).catch(err => {
            console.log(err.message);
        })
    }
}