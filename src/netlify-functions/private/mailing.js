const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = {
  sendEmail(message) {
    const messageWithSender = {
      ...message,
      bcc: 'xaver.fleer+permakultur-bern@gmail.com',
      from: 'webformular@permakultur-bern.ch',
    }
    return sgMail.send(messageWithSender)
  },
}
