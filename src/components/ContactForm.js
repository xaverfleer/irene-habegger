import React from 'react'
import { navigate } from 'gatsby'

let recipient

const ContactForm = ({ email }) => {
  recipient = email

  return (
    <form onSubmit={handleSubmit}>
      <div className="row uniform 50%">
        <div className="6u 12u$(xsmall)">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            title="Name"
          />
        </div>
        <div className="6u 12u$(xsmall)">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            title="Email"
          />
        </div>
        <div className="12u">
          <textarea
            name="message"
            id="message"
            placeholder="Nachricht"
            title="Nachricht"
            required
            rows="4"
          ></textarea>
        </div>
      </div>
      <ul className="actions" style={{ marginTop: 30 }}>
        <li>
          <input name="submit" type="submit" value="Absenden" />
        </li>
      </ul>
    </form>
  )
}

function getFormData(formElem) {
  return [].slice
    .call(formElem, 0)
    .map(({ name, value }) => ({ name, value }))
    .filter(({ name }) => name !== 'submit')
    .reduce((acc, { name, value }) => ({ ...acc, [name]: value }), {})
}

function getPayload(formElem) {
  const formData = getFormData(formElem)

  return JSON.stringify({ formData, recipient })
}

function handleError() {
  // eslint-disable-next-line no-alert
  alert(
    'Senden der Nachricht fehlgeschlagen.\nBitte versuchen Sie es später noch einmal oder kontaktieren Sie mich unter thieme.garten@outlook.com.'
  )
}

function handleSuccess(formElem) {
  formElem.reset()
  navigate('/mail-sent/')
}

function handleSubmit(event) {
  event.preventDefault()

  const formElem = event.currentTarget
  const payload = getPayload(formElem)

  const xhr = new XMLHttpRequest()
  xhr.open('POST', `.netlify/functions/sendMessage`)
  xhr.send(payload)
  xhr.addEventListener('load', () => {
    switch (xhr.status) {
      case 200:
        handleSuccess(formElem)
        break
      default:
        handleError()
        break
    }
  })

  xhr.addEventListener('error', () => {
    handleError()
  })
}

export default ContactForm
