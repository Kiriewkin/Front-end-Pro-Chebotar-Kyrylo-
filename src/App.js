import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import TodoPage from "./pages/Todo";
import MyLayout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import AboutMe from "./pages/Aboutme";
import Contacts from "./pages/Contacts";
import FormikForm from "./pages/FormikForm";
import Counter from "./pages/Counter";
import Login from "./pages/Login";
import ProtectedRouter from "./utils/ProtectedRoutes";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<MyLayout />}>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRouter />}>
            <Route path="/" index element={<AboutMe/>} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/counter" element={<Counter />} />
          </Route>
          <Route path="/formikform" element={<FormikForm />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App;