import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="flex-container">
          <Link className="navbar-brand" style={{ color: "whitesmoke" }} to="/">
            Home
          </Link>
          <Link
            className="navbar-brand"
            style={{ color: "whitesmoke" }}
            to="about"
          >
            About
          </Link>
          <Link
            className="navbar-brand"
            style={{ color: "whitesmoke" }}
            to="contact"
          >
            Contact
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
