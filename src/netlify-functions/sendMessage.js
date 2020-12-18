const logging = require('./private/logging')
const mailing = require('./private/mailing')
const responding = require('./private/responding')

exports.handler = function absenden(event, context, callback) {
  logging.logStart('Start sendMessage')
  const respond = responding.responseHandlers(callback)

  const parsedBody = JSON.parse(event.body)

  const msg = {
    to: parsedBody.recipient,
    subject: 'Nachricht von Website gesendet',
    text: JSON.stringify(parsedBody.formData),
  }

  logging.log('sending email')
  mailing
    .sendEmail(msg)
    .then(() => 'success')
    .catch(logging.logAndReject)
    .then(respond.success, respond.failed)
}
