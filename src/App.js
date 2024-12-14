import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import TodoPage from "./pages/Todo";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import AboutMe from "./pages/Aboutme";
import Contacts from "./pages/Contacts";
import FormikForm from "./pages/FormikForm";
import Counter from "./pages/Counter";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<TodoPage />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/formikform" element={<FormikForm />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App;