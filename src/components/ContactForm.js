import React from 'react'

const ContactForm = () => (
  <form method="post" action="#">
    <div className="row uniform 50%">
      <div className="6u 12u$(xsmall)">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          title="Name"
        />
      </div>
      <div className="6u 12u$(xsmall)">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          title="Email"
        />
      </div>
      <div className="12u">
        <textarea
          name="message"
          id="message"
          placeholder="Nachricht"
          title="Nachricht"
          rows="4"
        ></textarea>
      </div>
    </div>
    <ul className="actions" style={{ marginTop: 30 }}>
      <li>
        <input type="submit" value="Absenden" />
      </li>
    </ul>
  </form>
)

export default ContactForm
