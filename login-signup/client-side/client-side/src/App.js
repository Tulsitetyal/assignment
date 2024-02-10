import Login from "./Login";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup";
import Profile from "./Profile";
import Update from "./Update";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {isLoggedIn ? (
          <Route path="/profile" element={<Profile />}></Route>
        ) : (
          <Route path="/profile" element={<Navigate to="/" />}></Route>
        )}

        {isLoggedIn ? (
          <Route path="/update/:id" element={<Update />}></Route>
        ) : (
          <Route path="/update/:id" element={<Navigate to="/" />}></Route>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
