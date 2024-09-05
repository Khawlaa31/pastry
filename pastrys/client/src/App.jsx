import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import AllCakes from "./components/AllCakes.jsx";
import CreateCake from "./components/CreateCake.jsx";
import SignUpForm from "./components/signup.jsx";

function App() {
  return (
    <div>
      <h1 className="khawla">Welcome to our Cake Shop!</h1>
      <p className="hi">Explore our delicious selection of cakes.</p>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="/">SIGN UP</NavLink>
            </li>
            <li>
              <NavLink to="/cakes">All Cakes</NavLink>
            </li>
            <li>
              <NavLink to="/create">create cake</NavLink> {/* Updated path */}
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<SignUpForm />} />

          <Route path="/cakes" element={<AllCakes />} />

          <Route path="/create" element={<CreateCake />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
