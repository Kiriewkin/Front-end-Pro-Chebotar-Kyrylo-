import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

import './index.css'

export default function Contacts() {
    const initialValues = {
        name: '',
        email: '',
        message: '',
    }

    const handleSubmit = (values, { resetForm }) => {
        console.log('Данные отправлены', values);
        resetForm();
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Ім'я обов'язкове")
            .min(1, "Ім'я повинно містити мінімум 2 символи"),
        email: Yup.string()
            .required("Email обов'язковий")
            .email("Некоректний email"),
        message: Yup.string()
            .required("Повідомлення обов'язкове")
            .min(10, "Повідомлення повинно містити мінімум 10 символів"),
    })

    return (
        <div className="contact-page">
            <h1>Контакти</h1>
            <p>Ви можете зв'язатися зі мною через наступні канали:</p>

            <div className="contact-details">
                <div className="contact-item">
                    <h3>Email:</h3>
                    <p><a href="mailto:example@example.com">example@example.com</a></p>
                </div>

                <div className="contact-item">
                    <h3>Телефон:</h3>
                    <p>+380 123 456 789</p>
                </div>

                <div className="contact-item">
                    <h3>Адреса:</h3>
                    <p>Одеса, Україна</p>
                </div>
            </div>

            <p>Залиште повідомлення через форму нижче:</p>

            <Formik
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                initialValues={initialValues}
            >
                <Form className="contact-form">
                    <Field type="text" name="name" placeholder="Ваше ім'я" />
                    <ErrorMessage name="name" component="span" className="error" />

                    <Field type="email" name="email" placeholder="Ваш email" />
                    <ErrorMessage name="email" component="span" className="error" />

                    <Field
                        as="textarea"
                        name="message"
                        placeholder="Ваше повідомлення"
                        rows="4"
                        cols="50"
                    />
                    <ErrorMessage name="message" component="span" className="error" />
                    <button type="submit">Submit</button>

                </Form>
            </Formik>
        </div>
    );
}
