import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  // Validation schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required.'),
    email: Yup.string()
      .email('Enter a valid email address.')
      .required('Email is required.'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long.')
      .required('Password is required.'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form Submitted:', values);
    setSubmitting(false); // Stop submitting after successful submission

    // Simulate API request
    fetch('https://mockapi.com/register', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Registration Successful:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
            />
            <ErrorMessage name="username" component="span" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
            />
            <ErrorMessage name="email" component="span" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage name="password" component="span" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Register'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
