import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import BrokenAccessControl from "./components/BrokenAccessControl/BrokenAccessControl";
import SecurityMisconfiguration from "./components/SecurityMisconfiguration/SecurityMisconfiguration";
import SSRF from "./components/SSRF/SSRF";
import SQLInjection from "./components/SQLInjection/SQLInjection";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Router>
      <div>
        <div className="header"></div>
        <div className="container">
          <nav className="sidebar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/broken-access-control">Broken Access Control</Link>
              </li>
              <li>
                <Link to="/security-misconfiguration">
                  Security Misconfiguration
                </Link>
              </li>
              <li>
                <Link to="/ssrf">SSRF</Link>
              </li>
              <li>
                <Link to="/sql-injection">SQL Injection</Link>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/broken-access-control"
                element={<BrokenAccessControl />}
              />
              <Route
                path="/security-misconfiguration"
                element={<SecurityMisconfiguration />}
              />
              <Route path="/ssrf" element={<SSRF />} />
              <Route path="/sql-injection" element={<SQLInjection />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
