import React, { useState } from 'react';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    if (value.trim() === '') {
      setErrors({
        ...errors,
        [name]: 'This field is required',
      });
    } else {
      setErrors({
        ...errors,
        [name]: '',
      });

      if (name === 'email' && !validateEmail(value)) {
        setErrors({
          ...errors,
          email: 'Invalid email address',
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Message</label>
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;