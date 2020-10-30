const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = {
  sendEmail(message) {
    const messageWithSender = {
      ...message,
      bcc: 'xaver.fleer+valentin-thieme@gmail.com',
      from: 'website@valentin-thieme.ch',
    }
    return sgMail.send(messageWithSender)
  },
}
