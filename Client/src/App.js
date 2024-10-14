import "./App.css";
import React, { Profiler } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoutes";
import Register from "./Components/Register";
import { Provider } from "react-redux";
import store from "./store"; // Import your Redux store
import Library from "./design/Library";

function App() {
  return (
    <div className="Main">
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/*" element={<UserRoutes />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/lybary" element={<Library />} />
            <Route path="/registration" element={<Register />} />
            <Route path="/profile" element={<Profiler />} />
          </Routes>
        </Provider>
      </Router>
      <div className="background"></div>
    </div>
  );
}

export default App;
