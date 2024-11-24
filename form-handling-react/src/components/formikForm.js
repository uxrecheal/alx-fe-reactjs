import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import React from "react";

const formikForm = () => {
	
	return (
		<Formik>
			initialValues ={{ name: "", email: "", password: "" }}
			validationSchema ={Yup.object({
				name: Yup.string()
					.max(10, "Must be 10 characters or less")
					.required("Required"),
				email: Yup.string().email("invalid email address").required("Required"),
				password: Yup.string()
					.min(10, "Must be at least 10 characters long")
					.required("Required"),
			})}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				setSubmitting(false);
         		}, 400);
       		}}
			<Form>
				<label htmlFor='name'>Username</label>
				<Field name="name" type="text" placeholder='Eugeneforever_'/>
                <ErrorMessage name="name" />

				<label htmlFor="email">Email</label>
				<Field name="email" type="email" placeholder='leslieacquaye.la6@gmail.com'/>
                <ErrorMessage name="email" />

				<label htmlFor="password">Password</label>
				<Field name="password" type="password"/>
                <ErrorMessage name="password" />
				<button type="submit">Submit</button>
			</Form>
		</Formik>
	);
};

export default formikForm;