import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  // Define the validation schema
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
    setSubmitting(false);
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
            <label>Username:</label>
            <Field type="text" name="username" placeholder="Enter username" />
            <ErrorMessage name="username" component="span" className="error" />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" placeholder="Enter email" />
            <ErrorMessage name="email" component="span" className="error" />
          </div>

          <div>
            <label>Password:</label>
            <Field
              type="password"
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
