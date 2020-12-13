import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'

const ContactFormEntry = ({ props }) => {
  function handleInputChange(e) {
    const inputElement = e.target
    const entryElement = e.target.parentElement
    const hasInput = 0 < inputElement.value.length

    hasInput
      ? entryElement.classList.add('contact-form__entry--non-empty')
      : entryElement.classList.remove('contact-form__entry--non-empty')
  }

  const inputId = `contact-form-${props.name}`

  return (
    <div className="contact-form__entry">
      {props.type === 'text' && (
        <input
          className="contact-form__input"
          id={inputId}
          name={props.name}
          onInput={handleInputChange}
          required={props.required}
          title={props.label}
          type={props.type}
        />
      )}
      {props.type === 'textarea' && (
        <textarea
          className="contact-form__input"
          id={`contact-form-${props.name}`}
          name={props.name}
          onInput={handleInputChange}
          required={props.required}
          rows="8"
          title={props.label}
        ></textarea>
      )}
      <label className="contact-form__label" for={inputId}>
        {props.label}
        <span class="contact-form__required-indicator">
          {props.required && '*'}
        </span>
      </label>
    </div>
  )
}

const page = () => {
  const siteDescription = 'Irene Habegger | Contact'

  return (
    <Layout>
      <Helmet>
        <title>{siteDescription}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <h1>Contact</h1>
      <p>I look forward to hearing from you.</p>
      <form className="contact-form">
        <div className="contact-form__entries">
          <ContactFormEntry
            props={{
              label: 'Name',
              name: 'name',
              type: 'text',
              required: true,
            }}
          />
          <ContactFormEntry
            props={{
              label: 'Telefon oder E-Mail',
              name: 'contact',
              type: 'text',
              required: true,
            }}
          />
          <ContactFormEntry
            props={{
              label: 'Nachricht',
              name: 'message',
              type: 'textarea',
              required: true,
            }}
          />
        </div>
        <button className="contact-form__submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </Layout>
  )
}

export default page
