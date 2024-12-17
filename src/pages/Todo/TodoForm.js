import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addTodo } from "../../store/thunk/todoThunk";

import "./index.css";

export const TodoForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    todo: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const newTodo = {
      id: uuidv4(),
      title: values.todo,
      completed: false,
    };

    dispatch(addTodo(newTodo));

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
        {() => (
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
        )}
      </Formik>
    </div>
  );
};
