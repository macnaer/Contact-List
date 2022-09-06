import React from "react";
import ReactDOM from "react-dom/client";
// Import react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

// Import Store
import store from "./store";
import { Provider } from "react-redux";

// Import components
import Header from "./Componets/Header/Header";
import ContactList from "./Componets/ContactList/ContactList";
import NewContact from "./Componets/NewContact/NewContact";
import NotFound from "./Componets/NotFound/NotFound";
import UpdateContact from "./Componets/UpdateContact/UpdateContact";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/new-contact" element={<NewContact />} />
          <Route path="/update-contact" element={<UpdateContact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>{<App />}</React.StrictMode>);
