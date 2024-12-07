import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

import './index.css'

const FormikForm = () => {

    const initualValues = {
        name: '',
        email: '',
        phone: '',
        gender: '',
    }

    const handleSubmit = (values, { resetForm }) => {
        console.log('form submitted', values)
        resetForm()
    }

    const validateSchema = Yup.object({
        name: Yup.string()
            .required("Name is required")
            .min(1, "Name must be at least 1 character"),
        email: Yup.string()
            .required("Email is required")
            .email("Invalid email adress"),
        phone: Yup.string()
            .required("Phone number is required")
            .matches(
                /^\+?[1-9]\d{1,14}$/,
                "The number must start with +380"
            )
    })

    return (
        <div className="form-div">
            <h1>Form from Formik</h1>
            <Formik
                initialValues={initualValues}
                onSubmit={handleSubmit}
                validationSchema={validateSchema}
            >

                <Form className="form-container">

                    <Field type="text" name="name" placeholder="Enter your name..." />
                    <ErrorMessage name="name" component="span" className="form-error-message" />

                    <Field type="email" name="email" placeholder="Enter your email..." />
                    <ErrorMessage name="email" component="span" className="form-error-message" />

                    <Field type="phone" name="phone" placeholder="Enter your phone... +380" />
                    <ErrorMessage name="phone" component="span" className="form-error-message" />

                    <div style={{display:'flex', gap: 10}}>
                    <label>
                        <Field type="radio" name="gender" value="male" />
                        Male
                    </label>
                    <label>
                        <Field type="radio" name="gender" value="female" />
                        Female
                    </label>
                    <label>
                        <Field type="radio" name="gender" value="other" />
                        Other
                    </label>
                    </div>

                    <button type="submit">SUBMIT</button>
                </Form>

            </Formik>
        </div>
    )
}

export default FormikForm