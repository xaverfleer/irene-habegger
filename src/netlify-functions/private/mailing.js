const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = {
  sendEmail(message) {
    const messageWithSender = {
      ...message,
      bcc: 'xaver.fleer+irenehabegger@gmail.com',
      from: 'webformular@irenehabegger.com',
    }
    return sgMail.send(messageWithSender)
  },
}
