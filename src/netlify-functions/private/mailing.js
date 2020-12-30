const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = {
  sendEmail(message) {
    const messageWithSender = {
      ...message,
      bcc: [
        { email: 'xaver.fleer+irenehabegger@gmail.com' },
        { email: 'ireneha@hotmail.com' },
      ],
      from: 'webformular@irenehabegger.com',
    }
    return sgMail.send(messageWithSender)
  },
}
