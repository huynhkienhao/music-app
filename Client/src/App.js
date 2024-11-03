import "./App.css";
import React from "react";
// import { Profiler } from "react";
import { BrowserRouter as Route, Routes, BrowserRouter } from "react-router-dom";
// import AdminRoutes from "./AdminRoutes";
// import UserRoutes from "./UserRoutes";
// import Register from "./Components/Register";
// import { Provider } from "react-redux";
// import store from "./store/store";
// import Library from "./design/Library";
import AdminPage from './pages/AdminPage';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    // <div className="Main">
    //   <Router>
    //     <Provider store={store}>
    //       <Routes>
    //         <Route path="/*" element={<UserRoutes />} />
    //         <Route path="/admin/*" element={<AdminRoutes />} />
    //         <Route path="/lybary" element={<Library />} />
    //         <Route path="/registration" element={<Register />} />
    //         <Route path="/profile" element={<Profiler />} />
    //       </Routes>
    //     </Provider>
    //   </Router>
    //   <div className="background"></div>
    // </div>
    <BrowserRouter>
      <div className="Main">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
