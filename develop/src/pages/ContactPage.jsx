import React, { useState } from 'react';

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
      } if (!formData.message) {
        newErrors.message = 'Message is required';
        valid = false;
      }
       else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
        valid = false;
      }
  
      setErrors(newErrors);
      return valid;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        // Form is valid, proceed with submission logic
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '' });
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div class='form-group'>
          <label>
            Name:
            <input
              class="form-control"
              type="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div>
          <label>
            Email:
            <input
              class="form-control"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
        <div>
          <label>
            Message:
            <textarea
              class="form-control"
              type="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>

//       <form onSubmit={handleSubmit}>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Name</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//   </div>

//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
//   </div>
//   <div class="form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>

    );
}