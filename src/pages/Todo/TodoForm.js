import { React } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import "./index.css";

export const TodoForm = ({ addTodo }) => {
    const initialValues = {
        todo: "",
    };

    const handleSubmit = (values, { resetForm }) => {
        addTodo(values.todo);
        resetForm();
    };

    const validationSchema = Yup.object({
        todo: Yup.string()
            .required("Todo is required")
            .min(5, "Todo must be at least 5 characters"),
    });

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <Form style={{ display: "flex" }}>
                    <Field
                        type="text"
                        className="todo-input"
                        name="todo"
                        placeholder="Enter Todo"
                    />
                    <button type="submit" className="btn-form">
                        Submit
                    </button>
                    <ErrorMessage name="todo" component="span" className="error-message" />
                </Form>
            </Formik>
        </div>
    );
};
