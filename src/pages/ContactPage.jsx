import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '', // Clear error message on change
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Access environment variables with import.meta.env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  
    console.log('Service ID:', serviceId || 'Not Set');
    console.log('Template ID:', templateId || 'Not Set');
    console.log('User ID:', userId || 'Not Set');
  
    if (validateForm()) {
      emailjs
        .send(serviceId, templateId, formData, userId)
        .then(
          (response) => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
          },
          (error) => {
            console.error('Failed to send email:', error);
            alert('Failed to send your message.');
          }
        );
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Name:</label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>
      <div className='form-group'>
        <label>Email: </label>
        <input
          className="form-control"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <div className='form-group'>
        <label>Message:</label>
        <textarea
          className="form-control"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ height: '100px' }}
        />
        {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
